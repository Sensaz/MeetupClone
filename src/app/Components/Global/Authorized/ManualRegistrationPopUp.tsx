"use client";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Portal } from "../Portal";
import { useFetchData } from "@/hooks/useFetchData";
import { Button } from "../Button";
import { GlobalContext } from "@/app/GlobalContextProvider";
import "@/style/portal-children.sass";
import { z } from "zod";
import { useMutation } from "react-query";
import { RegisterUser } from "../../../../../request/api";

const emailPattern = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);

export const ManualRegistrationPopUp = () => {
  const { handleCloseAuthPopUp, showManualRegistration, handleOpenLoginPopUp } =
    useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data } = useFetchData();

  const formSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(65000),
    location: z.string().min(1).max(92),
    ageOfConsent: z.boolean().refine((value) => value === true),
  });

  const addRegister = (registerInput: any) => RegisterUser(registerInput);
  const addNewUser = () => useMutation(addRegister);
  const { mutate } = addNewUser();

  const onSubmit = async (dataForm: any) => {
    const { name, email, password, location } = formSchema.parse(dataForm);
    const input = { name, email, password, location };
    console.log(data?.users);
  };

  return (
    <Portal open={showManualRegistration} handleClose={handleCloseAuthPopUp}>
      <div className="portal-children">
        <header className="portal-children__header">
          <h2 className="portal-children__title">Ostatni krok w rejestracji</h2>
        </header>

        <form
          className="portal-children__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="nes-field portal-children__field">
            <label className="portal-children__label" htmlFor="name_field">
              Twoje imie
            </label>
            <input
              type="text"
              id="name_field"
              className={`nes-input ${errors.name ? "is-error" : ""}`}
              {...register("name", {
                required: { value: true, message: "Pole wymagane" },
                maxLength: { value: 50, message: "Twoje imie jest za długie" },
              })}
            />
            {errors.name && (
              <span className="nes-text is-error">
                {String(errors.name.message)}
              </span>
            )}
          </div>

          <div className="nes-field portal-children__field">
            <label className="portal-children__label" htmlFor="email_field">
              Adres E-mail
            </label>
            <input
              type="text"
              id="email_field"
              className={`nes-input ${errors.email && "is-error"}`}
              {...register("email", {
                required: { value: true, message: "Pole wymagane" },
                pattern: {
                  value: emailPattern,
                  message: "niepoprawny format adresu e-mail",
                },
              })}
            />
            {errors.email && (
              <span className="nes-text is-error">
                {String(errors.email.message)}
              </span>
            )}
          </div>

          <div className="nes-field portal-children__field">
            <label className="portal-children__label" htmlFor="password_field">
              Hasło
            </label>
            <input
              type="text"
              id="password_field"
              className={`nes-input ${errors.password && "is-error"}`}
              {...register("password", {
                required: { value: true, message: "Pole wymagane" },
                minLength: {
                  value: 8,
                  message: "Minimalna długoś to 8 znaków",
                },
                maxLength: {
                  value: 65000,
                  message: "Maksymalna długoś hasła wynosi 65 000 znaków",
                },
              })}
            />
            {errors.password && (
              <span className="nes-text is-error">
                {String(errors.password.message)}
              </span>
            )}
          </div>

          <div className="nes-field portal-children__field">
            <label className="portal-children__label" htmlFor="location_field">
              Miejsce zamieszkania
            </label>
            <input
              type="text"
              id="location_field"
              className={`nes-input ${errors.location && "is-error"}`}
              {...register("location", {
                required: { value: true, message: "Pole wymagane" },
                maxLength: {
                  value: 92,
                  message: "Maksymalna długoś to 92 znaki",
                },
              })}
            />
            {errors.location && (
              <span className="nes-text is-error">
                {String(errors.location.message)}
              </span>
            )}
          </div>

          <label>
            <input
              type="checkbox"
              className="nes-checkbox"
              {...register("ageOfConsent", {
                required: { value: true, message: "Pole wymagane" },
              })}
            />
            <span>Mam 18 lat lub więcej</span> <br />
            {errors.ageOfConsent && (
              <span className="nes-text is-error">
                {String(errors.ageOfConsent.message)}
              </span>
            )}
          </label>

          <Button className="portal-children__button">Zarejestruj</Button>
        </form>

        <p className="portal-children__message">
          Masz ju konto?{" "}
          <a href="#" onClick={handleOpenLoginPopUp}>
            Zaloguj się
          </a>
        </p>
      </div>
    </Portal>
  );
};
