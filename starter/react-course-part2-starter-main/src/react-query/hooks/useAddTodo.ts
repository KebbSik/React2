import { useMutation, useQueryClient } from "@tanstack/react-query";
import todoService, { Todo } from "../services/todoService";



interface AddTodoContext {
    previousTodos: Todo[];
  }

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
      mutationFn: todoService.post,
  
      onMutate: (newTodo: Todo) => {
        const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
  
        queryClient.setQueryData<Todo[]>(["todos"], (todos = []) => [
          newTodo,
          ...todos,
        ]);
        
        onAdd();
  
        return { previousTodos };
      },
  
      onSuccess: (savedTodo, newTodo) => {
        queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
          todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
        );
      },
  
      onError: (error, newTodo, context) => {
        if (!context) return;
        queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
      },
    });
}

export default useAddTodo;