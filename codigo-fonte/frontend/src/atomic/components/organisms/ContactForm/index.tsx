import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { contactFormSchema } from "@/utils/validationSchemas";
import { useForm as useFormSpree, ValidationError } from '@formspree/react';
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IdentificationCard,
  ChatTeardropText,
  At,
  Cards,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

export enum SubjectEnum {
  feedback = "feedback",
  elogio = "elogio",
  reclamacao = "reclamacao",
  duvida = "duvida",
  outros = "outros",
}

export interface FormProps {
  name: string;
  email: string;
  message: string;
  subject: SubjectEnum;
}

interface ContactFormProps {
  formData: FormProps;
}

export const ContactForm = ({ formData }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(contactFormSchema) as any,
  });

  const formspreeCode = process.env.NEXT_PUBLIC_FORMSPREE_CODE || '';

  const [state, handleSubmitSpree] = useFormSpree(formspreeCode);

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    const submissionData = {
      name: data.name,
      email: data.email,
      message: data.message,
      subject: data.subject,
    };
    handleSubmitSpree(submissionData); 
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <fieldset className={styles.contactForm__fieldset}>
        <label htmlFor="name" className={styles.contactForm__label}>
          Nome
        </label>
        <div className={styles.contactForm__container}>
          <IdentificationCard size={32} color="#9D5C63" />
          <input
            {...register("name")}
            placeholder="Daisy Jones"
            id="name"
            aria-invalid={errors.name ? "true" : "false"}
            className={styles.contactForm__input}
          />
        </div>
        {errors.name && <span role="alert">{errors.name.message}</span>}
      </fieldset>

      <fieldset className={styles.contactForm__fieldset}>
        <label htmlFor="email" className={styles.contactForm__label}>
          Email
        </label>
        <div className={styles.contactForm__container}>
          <At size={32} color="#9D5C63" />
          <input
            {...register("email")}
            id="email"
            placeholder="daisy.jones@mail.com"
            aria-invalid={errors.email ? "true" : "false"}
            className={styles.contactForm__input}
          />
        </div>
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </fieldset>

      <fieldset className={styles.contactForm__fieldset}>
        <label htmlFor="subject" className={styles.contactForm__label}>
          Assunto
        </label>
        <div className={styles.contactForm__container}>
          <Cards size={32} color="#9D5C63" />
          <select
            {...register("subject")}
            id="subject"
            aria-invalid={errors.subject ? "true" : "false"}
            className={styles.contactForm__select}
          >
            <option value={SubjectEnum.feedback}>Feedback</option>
            <option value={SubjectEnum.elogio}>Elogio</option>
            <option value={SubjectEnum.reclamacao}>Reclamação</option>
            <option value={SubjectEnum.duvida}>Dúvida</option>
            <option value={SubjectEnum.outros}>Outros</option>
          </select>
        </div>
        {errors.subject && <span role="alert">{errors.subject.message}</span>}
      </fieldset>

      <fieldset className={styles.contactForm__fieldset}>
        <label htmlFor="message" className={styles.contactForm__label}>
          Mensagem
        </label>
        <div className={styles.contactForm__container}>
          <ChatTeardropText size={32} color="#9D5C63" />
          <textarea
            {...register("message")}
            id="message"
            placeholder="Gostaria de sugerir..."
            aria-invalid={errors.message ? "true" : "false"}
            className={styles.contactForm__textarea}
          ></textarea>
        </div>
        {errors.message && <span role="alert">{errors.message.message}</span>}
      </fieldset>

      <input
        type="submit"
        value="Enviar"
        disabled={state.submitting}
        className={styles.contactForm__submit}
      />
    </form>
  );
};
