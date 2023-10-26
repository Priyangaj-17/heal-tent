import { UseFormReturn } from "react-hook-form";
import { VendorFormModel } from "./EditVendorDetailsLogic";

interface Props {
  form: UseFormReturn<VendorFormModel>;
  onSubmit: (data: VendorFormModel) => any;
}
const VendorForm = ({ form, onSubmit }: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;


  return (
    <>
      <form
        className="form form-wrapper flex fd-col pad-0 m-0 "
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        id="editvendordetails"
      >
        <div className="flex form-input al-center">
  <label className="bold-400" htmlFor="name">Name</label>
  <div className="flex name-inputbox al-center">
    <input
      placeholder="Mr."
      type="text"
      autoComplete="none"
      {...register("name.title")} // Use "Name.title" as the field name
    />
    <input
      placeholder="Augustin"
      {...register("name.firstname")} // Use "Name.firstname" as the field name
    />
    <input
      placeholder="Raja A"
      {...register("name.lastname")} // Use "Name.lastname" as the field name
    />
  </div>
</div>
        <div className="flex middle-input form-input al-center">
          <label className="bold-400" htmlFor="email">Email</label>
          <input placeholder="abs@gamil.com" type="email" {...register("email")} />
          {/* <Select options={dropdownOptions} onSelect={handleOptionSelect} /> */}
        </div>
        <div className="flex middle-input form-input al-center">
          <label className="bold-400" htmlFor="phonenumber">Phone</label>
          <input placeholder="9876545454" type="text" {...register("phonenumber")}/>
        </div>
        <div className="flex form-input al-center">
          <label className="bold-400" htmlFor="otherdetails">Other Details</label>
          <div className="flex al-center">
            <input
              placeholder="Designation"
              style={{ width: "15rem", height: "3rem" }} type="text" {...register("otherdetails.designation")}
            />
            <input
              placeholder="Department"
              style={{ width: "15rem", height: "3rem" }} type="text" {...register("otherdetails.department")}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default VendorForm;
