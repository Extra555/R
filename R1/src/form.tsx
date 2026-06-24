import { useForm } from "react-hook-form";
import {useEffect} from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  notify_about_new_projects: z.boolean(),
  notify_about_deadlines: z.boolean(),
  notify_about_new_tasks: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

export function ClearPinnedForm() {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      notify_about_new_projects: false,
      notify_about_deadlines: false,
      notify_about_new_tasks: true,
    },
  });

  const formValues=watch();

  useEffect(() => {
  console.log(formValues);
}, [formValues]);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <h1>Настройки уведомлений</h1>

    <ul className="NotifyForm">
      <li className="notify-item">
        <span className="notify-text">
          Уведомлять меня о проектах
        </span>

        <label className="switch">
          <input
            type="checkbox"
            {...register("notify_about_new_projects")}
          />

          <span className="slider">
            <span className="circle"></span>
          </span>
        </label>
      </li>

      <li className="notify-item">
        <span className="notify-text">
          Уведомлять меня о дедлайнах
        </span>

        <label className="switch">
          <input
            type="checkbox"
            {...register("notify_about_deadlines")}
          />

          <span className="slider">
            <span className="circle"></span>
          </span>
        </label>
      </li>

      <li className="notify-item">
        <span className="notify-text">
          Уведомлять меня о новых задачах
        </span>

        <label className="switch">
          <input
            type="checkbox"
            {...register("notify_about_new_tasks")}
          />

          <span className="slider">
            <span className="circle"></span>
          </span>
        </label>
      </li>
    </ul>
  </form>
);
}