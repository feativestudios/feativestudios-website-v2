import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [phoneNumber] = useState("+1 406-235-6377");

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .max(50, "Name cannot exceed 50 characters"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    // tel: yup.string().required("Contact number is required").matches(/^[0-9]+$/, "Contact number must be digits only"),
    message: yup
      .string()
      .max(499, "Message cannot exceed 500 characters")
      .required("Message is required"),
    company: yup.string().max(199, "Company name cannot exceed 200 characters"),
    howDidYouFindUs: yup.string().required("This field is required"),
  });

  const [showSpinner, setShowSpinner] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const override = {
    display: "block",
    borderColor: "#ffffff",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const HideMessage = () => {
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const onSubmit = async (data) => {
    setShowSpinner(true);

    const formData = {
      ...data,
      access_key: "27028b32-95a9-4d8e-903c-ea1b3e3c1a4c",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setShowMessage(true);
      setShowSpinner(false);
      HideMessage();
      reset();
    }
  };

   const copyNumber = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.success("Number copied to clipboard", {
        duration: 3000,
        position: 'top-center'
      });
    } catch (err) {
      toast.error("Failed to copy number", {
        duration: 3000,
        position: 'top-center'
      });
      console.error("Failed to copy number: ", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[30px] bg-black max-sm:p-5 p-16 xl:p-20 border-bitterSweet border shadow-custom w-full h-max xl:h-[668px]"
    >
      <div className="flex flex-col xl:flex-row gap-10 h-full">
        <div className="w-2/3 flex flex-col items-center justify-between h-full">
          <div className="flex flex-col gap-2">
            <div className="font-bold uppercase text-[48px] leading-[55px] tracking-[5px]">
              👋 Let's talk
            </div>
            <div className="font-normal text-sm leading-[21px] tracking-[1.3px] text-start">
              Call us, email us or fill out the form. We will get back to you
              within 24 hours.
            </div>
          </div>
          <div className="flex flex-col text-white gap-5 max-xl:mt-5 font-semibold self-start">
            <div className="flex flex-row gap-8">
              <div>
                <img src="/assets/call.svg" alt="" className="w-6 h-6"/>
              </div>
              <div>
                
                 
                    <div className="relative group inline-block">
                  <div className="text-darkLiver text-base md:text-lg cursor-pointer">{phoneNumber}</div>
                  <div className="absolute left-0 w-max -top-8 bg-black hidden group-hover:flex flex-row gap-2  bg-darkGray border border-gray-300 p-3  rounded shadow-lg">
                    <button
                      className=" text-ellipsis  text-sm text-light-white hover:text-white hover:font-semibold w-max text-center"
                      onClick={copyNumber}
                    >
                      Copy Number
                    </button>
                    <a
                      href={`tel:${phoneNumber}`}
                      className=" text-sm text-ellipsis text-light-white w-max hover:font-semibold hover:text-white text-center"
                    >
                      Call Number
                    </a>
                  </div>
                </div>
                 </div>
            </div>
            <div className="flex flex-row items-center gap-8">
              <div>
                <img
                  src="/assets/message.svg"
                  alt=""
className="w-6 h-6"                />
              </div>
              <div>
                  <a href="mailto:services@feativestudios.com">services@feativestudios.com</a>
                
                </div>
            </div>
              <div className="flex flex-row gap-8">
              <div>
                <img src="/assets/location.png" alt="" className="w-6 h-6"/>
              </div>
              <div>1001 S MAIN ST, STE 500, Kalispell, MT, United States, Montana</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              <div className="flex flex-col gap-3 w-full">
                <div className="uppercase font-medium text-sm leading-[23px] tracking-[1.3px] text-white text-opacity-90">
                  Name <span className={`${errors?.name ? 'text-bitterSweet':"text-white"}`}>*</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Write your name"
                    className="border-b bg-transparent w-full font-jost rounded-[2px] pb-3 border-white border-opacity-60 focus:border-bitterSweet focus:outline-none"
                    {...register("name")}
                  />
                  {errors?.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.name?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="uppercase font-medium text-sm leading-[23px] tracking-[1.3px] text-white text-opacity-90">
                  Email <span className={`${errors?.email ? 'text-bitterSweet':"text-white"}`}>*</span>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="youremail@address.com"
                    className="border-b pb-3 font-jost bg-transparent w-full rounded-[2px] focus:border-bitterSweet focus:outline-none border-white border-opacity-60"
                    {...register("email")}
                  />
                  {errors?.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.email.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              <div className="flex flex-col gap-3 w-full">
                <div className="uppercase font-medium text-sm leading-[23px] tracking-[1.3px] text-white text-opacity-90">
                  Company Name
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    className="border-b font-jost pb-3 bg-black focus:border-bitterSweet focus:outline-none  w-full rounded-[2px] border-white border-opacity-60"
                    {...register("company")}
                  />
                  {errors?.company && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.company.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="uppercase font-medium text-sm leading-[23px] tracking-[1.3px] text-white text-opacity-90">
                  How did you find us <span className={`${errors?.howDidYouFindUs ? 'text-bitterSweet':"text-white"}`}>*</span>
                </div>
                <div>
                  <select
                    className="border-b font-jost pb-3 focus:border-bitterSweet bg-black focus:outline-none rounded-[2px] bg-transparent w-full border-white border-opacity-60"
                    {...register("howDidYouFindUs")}
                  >
                    <option value="" className="bg-black">
                      Select an option
                    </option>
                    <option value="Google" className="bg-black">
                      Google
                    </option>
                    <option value="Social Media" className="bg-black">
                      Social Media
                    </option>
                    <option value="Friend/Colleague" className="bg-black">
                      Friend/Colleague
                    </option>
                    <option value="Advertisement" className="bg-black">
                      Advertisement
                    </option>
                    <option value="Other" className="bg-black">
                      Other
                    </option>
                  </select>
                  {errors.howDidYouFindUs && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.howDidYouFindUs.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="uppercase font-medium text-sm leading-[23px] tracking-[1.3px] text-white text-opacity-90">
              Message <span className={`${errors?.message ? 'text-bitterSweet':"text-white"}`}>*</span>
            </div>
            <div>
              <textarea
                type="text"
                maxLength={500}
                placeholder="Message"
                className="border-b bg-transparent w-full rounded-[2px] border-white font-jost border-opacity-60 min-h-[120px] focus:border-bitterSweet focus:outline-none resize-none"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          {showSpinner ? (
            <div className="mt-6 w-max text-2xl flex items-center justify-center bg-red-warm text-light-white rounded-full shadow">
              <ClipLoader
                color="#ffffff"
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <button
              type="submit"
              className=" w-max self-end text-base md:text-2xl hover:ring-1 hover:ring-lightWhite px-10 py-1 md:py-2.5 bg-bitterSweet text-light-white font-medium rounded-full shadow"
            >
              Send Message
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
