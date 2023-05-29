<template>
  <div class="wrapper">
    <div class="csr">
      <p>
        Submit your Certificate Signing Request(CSR) to be signed by default certificate.
      </p>
      <textarea name="csr" id="" cols="75" rows="16"></textarea> <br>
      <input type="submit" value="Submit">
    </div>
    <div class="csr-summary" v-if="rescsr">
      <h3>Certificate Signing Request Summary</h3>
      <table>
        <thead>
          <th>Name</th>
          <th>value</th>
        </thead>
        <tr>
          <td>Common Name</td>
          <td>mysite.com</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>Ethiopia</td>
        </tr>
      </table>
    </div>
    <div class="response" v-if="this.rescsr">
      <h3>your signed public certificate</h3>
    </div>
  </div>
</template>
<script>
export default {
  data (){
    return{
      rescsr : false
    }
    
  }

}
</script>
<style scoped>
.wrapper{
    padding: 3rem;
    
}
.csr{
    display: inline-block;
    padding: 2rem 0;
}
p, textarea, input{
  margin: .8rem 0;
}
 textarea{
  border: 1px solid #dde;
  border-radius: 6px;
 }
 input[type="submit"]{
    background: var(--vt-c-white);
    border: none;
    padding: .7rem 1.5rem;
    margin-top: 1.5rem;
    border-radius: 6px;
    font-family: 'Open Sans', sans-serif;
    background: rgb(37, 126, 243);
    color: white;
    font-weight: bold;

}
</style>
