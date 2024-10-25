import { useForm } from "react-hook-form";
import { useTheme } from "../../hooks/useTheme";
import styles from "./Add.module.css";

interface Tasks {
  id: number;
  title: string;
  desc: string;
};

interface AddProps {
  onSubmit: (task: Omit<Tasks, "id">) => void;
};

const Add:React.FC<AddProps> = ({ onSubmit }) => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<{ title: string; desc: string; }>();
  const { isDarkMode } = useTheme();

  console.log(errors);

  const onSubmitHandler = (data: { title: string; desc: string; }) => {
    if (data.title.trim() && data.desc.trim()) {
      onSubmit({ title: data.title, desc: data.desc });
      reset();
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmitHandler)();
    };
  };

  return (
    <aside className={ styles.container }>
      <form
        className={ isDarkMode ? styles.darkform : styles.lightform }
        onSubmit={ handleSubmit(onSubmitHandler) }
      >
        <h2>Add New Task</h2>

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          { ...register("title", {
            required: "Title is required",
            maxLength: { value: 50, message: "Cannot exceed 50 characters" },
          }) }
          className={ styles.titleField }
          onKeyUp={ handleKeyPress }
          placeholder="Title"
        />

        <label htmlFor="desc">Description:</label>
        <textarea
          id="desc"
          rows={ 5 }
          { ...register("desc", { required: "Description is required" }) }
          className={ styles.descField }
          placeholder="Description"
        />
        <div className={ styles.buttons }>
          <input 
            className={ isDarkMode ? styles.darkbtn :styles.lightbtn }
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </aside>
  );
};

export default Add;