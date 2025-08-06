import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";

const JobApplicationForm = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Full name is required").max(50),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .matches(/^[0-9+() -]*$/, "Invalid phone number")
      .required("Phone number is required"),
    portfolio: yup
      .string()
      .required("Portfolio is required")
      .url("Invalid URL"),
    linkedin: yup
      .string()
      .required("LinkedIn profile URL is required")
      .url("Invalid LinkedIn URL"),
    resume: yup
      .mixed()
      .required("Resume is required")
      .test(
        "fileSize",
        "File too large (max 10MB)",
        (value) => value && value[0]?.size <= 10 * 1024 * 1024
      )
      .test(
        "fileType",
        "Only PDF and Word documents are allowed",
        (value) => {
          if (!value || !value[0]) return false;
          const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ];
          return allowedTypes.includes(value[0]?.type);
        }
      ),
    coverLetter: yup
      .string()
      .max(1000, "Cover letter must be under 1000 characters"),
    howDidYouFindUs: yup.string().required("This field is required"),
  });

  const [showSpinner, setShowSpinner] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const override = { display: "block", borderColor: "#ffffff" };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const hideMessage = () => {
    setTimeout(() => {
      setShowMessage(false);
      setSubmitError("");
    }, 3000);
  };

  const onSubmit = async (data) => {
    setShowSpinner(true);
    setSubmitError("");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("portfolio", data.portfolio);
    formData.append("linkedin", data.linkedin);
    formData.append("howDidYouFindUs", data.howDidYouFindUs);
    formData.append("coverLetter", data.coverLetter || "");
    formData.append("resume", data.resume[0]);

    try {
      const response = await fetch("https://feativestudios.com/api/apply", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setShowMessage(true);
        setShowSpinner(false);
        hideMessage();
        reset();
      } else {
        if (result.errors) {
          setSubmitError(result.errors.map(err => err.msg).join(", "));
        } else {
          setSubmitError(result.error || "Failed to submit application");
        }
        setShowSpinner(false);
        hideMessage();
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Network error. Please try again.");
      setShowSpinner(false);
      hideMessage();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[30px] bg-black max-sm:p-5 p-16 xl:p-20 border-bitterSweet border shadow-custom w-full h-max"
    >
      <div className="flex flex-col gap-10">
        {/* Success/Error Messages */}
        {showMessage && (
          <div className="bg-green-600 text-white p-4 rounded-lg">
            Application submitted successfully!
          </div>
        )}
        {submitError && (
          <div className="bg-red-600 text-white p-4 rounded-lg">
            {submitError}
          </div>
        )}

        {/* Full Name and Email */}
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white uppercase font-medium text-sm tracking-[1.3px]">
              Full Name <span className={`${errors.name ? 'text-bitterSweet':"text-white"} text-base font-semibold`}>*</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="border-b bg-transparent w-full font-jost pb-3 border-white border-opacity-60 focus:border-bitterSweet focus:outline-none"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label className="text-white uppercase font-medium text-sm tracking-[1.3px]">
               Email <span className={`${errors.email ? 'text-bitterSweet':"text-white"} text-base font-semibold`}>*</span>
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="border-b bg-transparent w-full font-jost pb-3 border-white border-opacity-60 focus:border-bitterSweet focus:outline-none"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone and Portfolio */}
        <div className="flex flex-col  gap-10 w-full">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white uppercase font-medium text-sm tracking-[1.3px]">
               Phone Number <span className={`${errors.phone ? 'text-bitterSweet':"text-white"} text-base font-semibold`}>*</span>
            </label>
            <input
              type="text"
              placeholder="+92 XXXXXXXXXX"
              className="border-b bg-transparent w-full font-jost pb-3 border-white border-opacity-60 focus:border-bitterSweet focus:outline-none"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label className="text-white uppercase font-medium text-sm tracking-[1.3px]">
               Portfolio URL <span className={`${errors.portfolio ? 'text-bitterSweet':"text-white"} text-base font-semibold`}>*</span>
            </label>
            <input
              type="url"
              placeholder="https://yourportfolio.com"
              className="border-b bg-transparent w-full font-jost pb-3 border-white border-opacity-60 focus:border-bitterSweet focus:outline-none"
              {...register("portfolio")}
            />
            {errors.portfolio && (
              <p className="text-red-500 text-sm">{errors.portfolio.message}</p>
            )}
          </div>
        </div>

        {/* LinkedIn and How did you find us */}
        <div className="flex flex-col  gap-10 w-full">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white uppercase font-medium text-sm tracking-[1.3px]">
               LinkedIn Profile <span className={`${errors.linkedin ? 'text-bitterSweet':"text-white"} text-base font-semibold`}>*</span>
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/yourname"
              className="border-b bg-transparent w-full font-jost pb-3 border-white border-opacity-60 focus:border-bitterSweet focus:outline-none"
              {...register("linkedin")}
            />
            {errors.linkedin && (
              <p className="text-red-500 text-sm">{errors.linkedin.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label className="text-white uppercase font-medium text-sm tracking-[1.3px]">
              How did you hear about us? <span className={`${errors.howDidYouFindUs ? 'text-bitterSweet':"text-white"} text-base font-semibold`}>*</span>
            </label>
            <select
              className="border-b bg-black w-full font-jost pb-3 border-white border-opacity-60 focus:border-bitterSweet focus:outline-none"
              {...register("howDidYouFindUs")}
            >
              <option value="">Select</option>
              <option value="Google">Google</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Referral">Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="Other">Other</option>
            </select>
            {errors.howDidYouFindUs && (
              <p className="text-red-500 text-sm">
                {errors.howDidYouFindUs.message}
              </p>
            )}
          </div>
        </div>

        {/* Cover Letter */}
        <div className="flex flex-col gap-3 w-full">
          <label className="text-white uppercase font-medium text-sm tracking-[1.3px]">
            Cover Letter
          </label>
          <textarea
            placeholder="Write a short message or cover letter..."
            className="border-b bg-transparent w-full rounded-[2px] font-jost pb-3 border-white border-opacity-60 min-h-[120px] focus:border-bitterSweet focus:outline-none resize-none"
            {...register("coverLetter")}
          />
          {errors.coverLetter && (
            <p className="text-red-500 text-sm">{errors.coverLetter.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label className="text-white uppercase font-medium text-sm tracking-[1.3px]">
             Upload Resume (PDF/Word max 10MB) <span className={`${errors.resume ? 'text-bitterSweet':"text-white"} text-base font-semibold`}>*</span>
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="text-white file:bg-bitterSweet file:text-white file:rounded-full file:px-4 file:py-1 file:border-0"
            {...register("resume")}
          />
          {errors.resume && (
            <p className="text-red-500 text-sm">{errors.resume.message}</p>
          )}
        </div>

        {/* Submit */}
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
            disabled={showSpinner}
            className="mt-6 w-max text-base md:text-2xl hover:ring-1 hover:ring-lightWhite px-10 py-1 md:py-2.5 bg-bitterSweet text-light-white font-medium rounded-full shadow disabled:opacity-50"
          >
            Submit Application
          </button>
        )}
      </div>
    </form>
  );
};

export default JobApplicationForm;