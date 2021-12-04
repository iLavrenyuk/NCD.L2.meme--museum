import React from 'react';
import { useForm } from 'react-hook-form';

export const AddMemeForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch());
  console.log(register);

  return (
    <form onSubmit={handleSubmit(onSubmit)} validation-schema="schema" className="mt-14 w-full">
      <div className="flex flex-col lg:flex-row justify-center items-baseline lg:space-x-5">
        <div v-for="field in formFields" key="field" className="mt-4 lg:mt-0">
          <p htmlFor="field.id" className="text-gray-400 pl-4">
            {'field.label'}
          </p>
          <input
            // ref={register}
            v-model="field.id"
            type="text"
            name="field.id"
            id="field.id"
            placeholder="field.label"
            className="w-64 lg:w-44 xl:w-64 mt-2 py-3 rounded-md border-2 border-gray-900 focus:border-blue-600 outline-none pl-6"
          />
          {errors?.['field.id'] && <span className="w-64 text-red-500">This field is required</span>}
        </div>

        <div className="mt-4 lg:mt-0">
          <p className="text-gray-400 pl-4 lg:pl-0">Category</p>
          <select
            // ref={register}
            v-model="category"
            name="category"
            id="category"
            className="w-16 mt-2 py-3 rounded-md border-2 border-gray-900 focus:border-blue-600 outline-none px-3"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="mt-4 lg:mt-0">
          <p className="hidden lg:block text-transparent">buttons</p>
          <button className="inline-block mt-2 w-64 lg:w-44 xl:w-64 py-3 bg-gradient-to-r from-blue-500 hover:from-white active:from-gray-200 to-blue-600 hover:to-white active:to-gray-200 text-white hover:text-blue-600 text-center font-semibold rounded-md">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
