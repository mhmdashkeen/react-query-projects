import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosOptions from "./utils";
import { toast } from "react-toastify";

export const useFetchTask = () => {
    const fetchTasks = async () => {
        const { data } = await axiosOptions.get("/");
        return data;
      }
      const {data, isLoading, error} = useQuery({
        queryKey: ["tasks"],
        queryFn: fetchTasks
      });
    return { data, isLoading, error };
}

export const useCreateTask = () => {
    const addTask = async (newTask) => {
        const { data } = await axiosOptions.post("/", newTask);
        return data;
      }
      const queryClient = useQueryClient();
      const {mutate: createTasks, isLoading} = useMutation({
        mutationFn: addTask,
        onMutate: async (newTask) => {
            await queryClient.cancelQueries(["tasks"]);
            const previousTask = queryClient.getQueryData(["tasks"]);
            queryClient.setQueryData(["tasks"], (old) => {
             return {
              ...old,
              taskList: [
                ...old.taskList,
                {id: Date.now(), isDone: false, ...newTask}
              ]
             }
            });
            toast.success("Added task");
            return { previousTask };
        },
        // onSuccess: () => {
        //   queryClient.invalidateQueries({ queryKey: ['tasks'] });
        //   toast.success("Added task");
        //   setNewItemName("");
        // },
        onError: (error, newTask, context) => {
          queryClient.setQueryData(["tasks"], () => context.previousTask);
          toast.error(error.response.data.msg);
        },
        onSettled: () => {
          queryClient.invalidateQueries(["tasks"]);
        }
      });
    return { createTasks, isLoading };
}

export const useEditTask = () => {
    const editTask = async (task) => {
        const {data} = await axiosOptions.patch(`/${task.id}`, { isDone: task.isDone ? !task.isDone : true   });
        return data;
      }
      const queryClient = useQueryClient();
      const {mutate: edit} = useMutation({
        mutationFn: editTask,
        onMutate: async (item) => {
          await queryClient.cancelQueries(["tasks"]);
          const previousTask =  queryClient.getQueryData(["tasks"]);
          queryClient.setQueryData(["tasks"], old => {
            const index = old.taskList.findIndex(i => i.id === item.id);
            old.taskList[index].isDone = !old.taskList[index].isDone;
            return {
              ...old
            }
          });
          toast.success("Task updated");
          return { previousTask };
        },
        // onSuccess: () => {
        //   queryClient.invalidateQueries(["tasks"])
        // },
        onError: (error) => {
          queryClient.setQueryData(["tasks"], () => context.previousTask);
          toast.error("There is some problem", error);
        },
        onSettled: () => {
          queryClient.invalidateQueries(["tasks"]);
        }
      })
    return { edit };
}

export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    const deleteTaskAPI = async (id) => {
      const {data} = await axiosOptions.delete(`/${id}`);
      return data;
    }   
    const {mutate: deleteTaks, isLoading: deleteLoading} = useMutation({
      mutationFn: deleteTaskAPI,
      // onSuccess: () => {
      //   queryClient.invalidateQueries(["tasks"])
      //   toast.success("Deleted tasks");
      // },
      onMutate: async (id) => {
        await queryClient.cancelQueries(["tasks"]);
        const previousTasks = queryClient.getQueryData(["tasks"]);
        queryClient.setQueryData(["tasks"], old => {
          const updatedData = old.taskList.filter((f) => f.id !== id);
          return{
            ...old,
            taskList: updatedData
          }
        });
        toast.success("Deleted tasks");
        return { previousTasks };
      },
      onError: (error) => {
        queryClient.setQueryData(["tasks"], () => context.previousTask);
        toast.error(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries(["tasks"])
      }
    })
    return { deleteTaks, deleteLoading };
}