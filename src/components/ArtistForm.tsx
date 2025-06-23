"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  categories: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee is required"),
  location: yup.string().required("Location is required"),
});

const categoryOptions = ["Singer", "Dancer", "Speaker", "DJ"];
const languageOptions = ["Hindi", "English", "Punjabi", "Tamil"];
const feeOptions = ["$100-$300", "$300-$700", "$700-$1500", "$1500+"];

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      categories: [],
      languages: [],
    },
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", { ...data, profileImage });
    alert("Form submitted! Check console.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block font-medium">Name</label>
        <input {...register("name")} className="border p-2 w-full rounded" />
        <p className="text-sm text-red-500">{errors.name?.message}</p>
      </div>

      {/* Bio */}
      <div>
        <label className="block font-medium">Bio</label>
        <textarea
          {...register("bio")}
          rows={3}
          className="border p-2 w-full rounded"
        />
        <p className="text-sm text-red-500">{errors.bio?.message}</p>
      </div>

      {/* Category */}
      <div>
        <label className="block font-medium mb-2">Category</label>
        {categoryOptions.map((cat) => (
          <label key={cat} className="block">
            <input type="checkbox" value={cat} {...register("categories")} />
            <span className="ml-2">{cat}</span>
          </label>
        ))}
        <p className="text-sm text-red-500">{errors.categories?.message}</p>
      </div>

      {/* Languages */}
      <div>
        <label className="block font-medium mb-2">Languages Spoken</label>
        {languageOptions.map((lang) => (
          <label key={lang} className="block">
            <input type="checkbox" value={lang} {...register("languages")} />
            <span className="ml-2">{lang}</span>
          </label>
        ))}
        <p className="text-sm text-red-500">{errors.languages?.message}</p>
      </div>

      {/* Fee Range */}
      <div>
        <label className="block font-medium">Fee Range</label>
        <select {...register("fee")} className="border p-2 w-full rounded">
          <option value="">Select fee</option>
          {feeOptions.map((fee) => (
            <option key={fee} value={fee}>
              {fee}
            </option>
          ))}
        </select>
        <p className="text-sm text-red-500">{errors.fee?.message}</p>
      </div>

      {/* Location */}
      <div>
        <label className="block font-medium">Location</label>
        <input
          {...register("location")}
          className="border p-2 w-full rounded"
        />
        <p className="text-sm text-red-500">{errors.location?.message}</p>
      </div>

      {/* Profile Image */}
      <div>
        <label className="block font-medium">Profile Image (optional)</label>
        <input
          type="file"
          onChange={(e) =>
            setProfileImage(e.target.files ? e.target.files[0] : null)
          }
          accept="image/*"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
}
