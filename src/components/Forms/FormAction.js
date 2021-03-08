function FormAction({caption, onClick}){
  let myClasses = [
    "w-full",
    "h-8",
    "flex",
    "items-center",
    "justify-center",
    "px-4",
    "py-4",
    "my-4",
    "border",
    "border-transparent",
    "text-base",
    "font-light ",
    "rounded-lg",
    "text-black",
    "bg-indigo-50",
    "hover:bg-indigo-50",
    "md:py-4",
    "md:text-lg",
    "md:px-10"
  ];
  return(
    <button
      onClick={onClick}
      className={myClasses.join(" ")}
    >
      {caption}
    </button>
  );
}

export default FormAction;
