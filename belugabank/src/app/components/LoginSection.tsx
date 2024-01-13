"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSectionSchema } from "../validation/LoginSection";

type Inputs = {
  email: string;
  name: string;
  dateOfBirth: string;
};

export function LoginSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      name: "",
      dateOfBirth: "",
    },
    resolver: zodResolver(LoginSectionSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section id="register">
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-primary-blue text-[92px]">Registre-se</h1>
        <p className="text-bone-white font-thin">
          Registre-se para receber atualizações mensais do Beluga Bank, se
          mantendo sempre por dentro da sua vida financeira
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 my-16"
        >
          <label
            className="flex text-lg font-semibold text-bone-white items-center justify-center"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            disabled={isSubmitting}
            {...register("email")}
            className="border rounded-md"
          />
          {errors.email?.message && (
            <div className="text-default-red">{errors.email?.message}</div>
          )}

          <label
            className="flex text-lg font-semibold text-bone-white items-center justify-center"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            disabled={isSubmitting}
            {...register("name")}
            className="border rounded-md"
          />
          {errors.name?.message && (
            <div className="text-default-red">{errors.name?.message}</div>
          )}

          <label
            className="flex text-lg font-semibold text-bone-white items-center justify-center"
            htmlFor="dateOfBirth"
          >
            Data de nascimento
          </label>
          <input
            type="date"
            id="dateOfBirth"
            disabled={isSubmitting}
            {...register("dateOfBirth")}
            className="border rounded-md"
          />
          {errors.dateOfBirth?.message && (
            <div className="text-default-red">
              {errors.dateOfBirth?.message}
            </div>
          )}
          <button
            className="bg-primary-blue p-3 w-[600px] text-xl border rounded-lg mt-12"
            type="submit"
            disabled={isSubmitting}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginSection;
