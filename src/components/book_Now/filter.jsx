import React, { useState,useEffect,useRef } from "react";
import style from "./filter.module.css"; // use your own CSS
import { ChevronDown } from "lucide-react";

const FilterDropdown = ({ label, id, options, form, setForm, errors, setErrors }) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    
//    const selectedOption = options.find(opt => opt.label === form[id]);
//    const selectedOption = options.find(opt => opt.label === form[id]);
  const filteredOptions = options.filter(opt =>
   opt.label.toLowerCase().includes(search.toLowerCase())

  );
  
    useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.dropdownContainer} ref={dropdownRef}>
        <div className={style.label_and_span}>
      <label htmlFor={id} className={style.label}>{label}<span className={style.astric}>*</span> </label>
      {errors[id] && <span className={style.error}>This field is required. You have to enter something before
            submitting.</span>}
        </div>
     

<div
  className={`${style.dropdownBox} ${open ? style.activeDropdown : ""}`}
  onClick={() => setOpen(!open)}
>
  { form[id] ? (
    <span
      style={{
        background: options.find(opt => opt.label === form[id])?.color,
        padding: "0px 6px",
        borderRadius: "4px",
        display: "inline-block"
      }}
    >
      {form[id]}
        </span>
  ) : ("")}
    <span className={style.dropdownIcon}><ChevronDown /> </span>
</div>

      {open && (
        <div className={style.dropdownList}>
          <input
            className={style.searchInput}
            type="text"
            placeholder="Find an option"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <ul className={style.optionsList}>
                {filteredOptions.map((opt, index) => (
         <li
        key={index}
        className={style.listofdrop_down}
        style={{ background: opt.color }}
        onClick={() => {
        setForm({ ...form, [id]: opt.label });
        setErrors({ ...errors, [id]: false });
        setOpen(false);
        setSearch("");
        }}
         >
        {opt.label}
        </li>
        ))}


            {filteredOptions.length === 0 && (
              <li className={style.noOption}>No match found</li>
            )}
          </ul>
        </div>
      )}

      
    </div>
  );
};

export default FilterDropdown;
