<template>
  <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" style="font-family: 'Russo One', sans-serif; color: #5ec0ca; font-size: xx-large;">Add Form</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Product Name">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Product Image URL">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Stock">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Price">
              </div>
              <button type="submit" class="btn btn-info" data-dismiss="modal">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AddForm'
}
</script>

<style>

</style>
