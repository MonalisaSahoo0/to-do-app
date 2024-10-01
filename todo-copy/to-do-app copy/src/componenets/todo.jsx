
const Todo = ({name, date}) => {
  return (
    <div class="container"> 
    <div class="row">
  <div class="col-6 col-md-6">
    {name}
  </div>
  <div class="col-6 col-md-4">
   {date}
  </div>
  <div class="col-6 col-md-2">
  <button type="button" class="btn btn-danger">Buy</button>
  </div>
</div>
</div>
  );
}
export default Todo;