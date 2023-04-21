import "./form-input.styles.scss";

const FormInput = ({ label, ...otherAttrs }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherAttrs} />
      <label
        className={`${
          otherAttrs.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};
export default FormInput;
