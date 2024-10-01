function AddContainer(){
  return(
  <div class="container text-center"> 
  <div class="row">
  <div class="col-6 col-md-6">
    <input type='text' placeholder='Enter Todo here'></input>
  </div>
  <div class="col-6 col-md-4">
    <input type='date'></input>
  </div>
  <div class="col-6 col-md-2">
  <button type="button" class="btn btn-success">Add</button>
  </div>
</div>
</div>
  );
}

export default AddContainer;