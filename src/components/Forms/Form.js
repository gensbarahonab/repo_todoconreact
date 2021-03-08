function Form({children}){
  return (
    <form className="flex flex-col  justify-center px-4 py-4 mx-4 my-4 border bg-transparent w-60 h-50">
        {children}
    </form>
  );
}

export default Form;
