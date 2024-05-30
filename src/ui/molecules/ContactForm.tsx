"use client"

import React, { useState } from "react"

import { useForm } from "react-hook-form"
import { Alert, Button, Input, Card, Content } from "../atoms"
import { H2 } from "../atoms/Header"

export interface IContactValues {
  name: string
  email: string
  message: string
}

const defaultValues: IContactValues = {
  name: "",
  email: "",
  message: "",
}

export interface ContactFormProps {
  title: string
  description: string
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { title, description } = props
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IContactValues>({
    defaultValues,
  })

  /**
   * Handle Submission
   */
  const onSubmit = async (data: IContactValues) => {
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      } else {
        setSuccess(true)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      setError("root", {
        type: "400",
        message: "Sorry, we couldn't process your request",
      })
    }
  }

  /* eslint-disable react/jsx-props-no-spreading */
  return !success ? (
    <Card>
      <H2>{title}</H2>
      <Content>{description}</Content>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full"
        id="contact-form"
      >
        <div className="grid sm:grid-cols-2 gap-x-4 mb-4 w-full text-lg">
          <Input
            label="name"
            placeholder="Name *"
            id="name"
            required
            {...register("name", { required: "Name required" })}
          />

          <Input
            label="email"
            placeholder="Email *"
            type="email"
            id="email"
            required
            {...register("email", {
              required: "This field is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid Email",
              },
            })}
          />
        </div>
        <Input
          label="message"
          placeholder="Type your question"
          type="textarea"
          id="message"
          required
          {...register("message", { required: true })}
        />

        {(errors.name || errors.email || errors.message) && (
          <span>All fields are required*</span>
        )}
        {errors.root && <div>{errors.root.message}</div>}
        <div>
          <Button type="submit" disabled={loading} fullWidth>
            {loading ? "Sending..." : "Contact Diana"}
          </Button>
        </div>
      </form>
    </Card>
  ) : (
    <Alert>
      Thank you! We have received your message and will be in touch shortly.
    </Alert>
  )
}

export default ContactForm
