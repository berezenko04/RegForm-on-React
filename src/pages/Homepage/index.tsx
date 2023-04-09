import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

import styles from './Home.module.scss'

//icons
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Alert } from '../../assets/alert.svg'

type Inputs = Record<string, string>

const Home: React.FC = () => {
    const [data, setData] = useState<Inputs>();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = dataSubmit => setData(dataSubmit);
    console.log(data);

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.form__head}>
                    <div className={styles.form__head__logo}>
                        <Logo />
                    </div>
                    <div className={styles.form__head__title}>
                        <h1>Create an account</h1>
                        <p>Let’s get started with your 30day free trial.</p>
                    </div>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form__inputs}>
                        <div className={styles.form__inputs__item}>
                            <label htmlFor="username">Username</label>
                            <div className={errors.username ? styles.form__inputs__item__input__error : styles.form__inputs__item__input}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="username"
                                    placeholder="Enter username"
                                    {...register("username", {
                                        required: "This field is required",
                                        maxLength: {
                                            value: 20,
                                            message: "Username cannot exceed 20 characters"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Username must have at least 6 characters"
                                        },
                                        pattern: {
                                            value: /^[^._ ](?:[\w-]|\.[\w-])+[^._ ]$/,
                                            message: 'Incorrect username'
                                        }
                                    })} />
                                {errors.username && <Alert />}
                            </div>
                            {errors.username && <p className={styles.error}>{errors.username.message}</p>}
                        </div>
                        <div className={styles.form__inputs__item}>
                            <label htmlFor="mail">E-mail</label>
                            <div className={errors.mail ? styles.form__inputs__item__input__error : styles.form__inputs__item__input}>
                                <input
                                    className={styles.input}
                                    type="email"
                                    id="mail"
                                    placeholder="Enter e-mail"
                                    {...register("mail", {
                                        required: true,
                                        maxLength: {
                                            value: 25,
                                            message: "E-mail cannot exceed 25 characters"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "E-mail must have at least 6 characters"
                                        }
                                    })} />
                                {errors.mail && <Alert />}
                            </div>
                            {errors.mail && <p className={styles.error}>{errors.mail.message}</p>}
                        </div>
                        <div className={styles.form__inputs__item}>
                            <label htmlFor="password">Password</label>
                            <div className={errors.password ? styles.form__inputs__item__input__error : styles.form__inputs__item__input}>
                                <input
                                    className={styles.input}
                                    type="password"
                                    id="password"
                                    placeholder="Enter password"
                                    {...register("password", {
                                        required: "You must specify a password",
                                        maxLength: {
                                            value: 20,
                                            message: "Password cannot exceed 20 characters"
                                        },
                                        minLength: {
                                            value: 8,
                                            message: "Password must have at least 8 characters"
                                        },
                                        pattern: {
                                            value: /(?=.*\d)(?=.*[a-z]).{8,}/,
                                            message: "Must contain at least one number and one letter"
                                        }
                                    })} />
                                {errors.password && <Alert />}
                            </div>
                            {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                        </div>
                        <div className={styles.form__inputs__item}>
                            <label htmlFor="repeatPassword">Repeat Password</label>
                            <div className={errors.confirm ? styles.form__inputs__item__input__error : styles.form__inputs__item__input}>
                                <input
                                    className={styles.input}
                                    type="password"
                                    id="repeatPassword"
                                    placeholder="Repeat password"
                                    {...register("confirm", {
                                        required: "You must specify a password",
                                        maxLength: {
                                            value: 20,
                                            message: "Password cannot exceed 20 characters"
                                        },
                                        validate: (val: string) => {
                                            if (watch('password') != val) {
                                                return "Your passwords do no match";
                                            }
                                        }
                                    })} />
                                {errors.confirm && <Alert />}
                            </div>
                            {errors.confirm && <p className={styles.error}>{errors.confirm.message}</p>}
                        </div>
                    </div>
                    <input type="submit" value={'Create account'} />
                </form>
                {data &&
                    <ul className={styles.result}>
                        <li>
                            <p>Username: {data.username}</p>
                        </li>
                        <li>
                            <p>Email: {data.mail}</p>
                        </li>
                        <li>
                            <p>Password: {data.password}</p>
                        </li>
                        <li>
                            <p>RepeatPassword: {data.confirm}</p>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default Home