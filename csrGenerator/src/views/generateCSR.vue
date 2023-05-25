<script>
export default {

}
</script>
<template>
    <div class="wrapper">
        <h2>Generate a Certificate Signing Request</h2>
        
        <div class="dname">
            <span>Common Name: </span>
            <input type="text">
        </div>
        <div class="dname">
            <span>Organization: </span>
            <input type="text">
        </div>
        <div class="dname">
            <span>Organizational Unit: </span>
            <input type="text">
        </div>
        <div class="dname">
            <span>Locality: </span>
            <input type="text">
        </div>
        <div class="dname">
            <span>State: </span>
            <input type="text">
        </div>
        <div class="dname">
            <span>Country: </span>
            <input type="text">
        </div>
        <div class="dname">
            <span>Key Size: </span>
            <div class="keysize">
                <label class="form-radio">
                    <input type="radio" name="keysize" id="" value="1024">1024
                </label>
                <label class="form-radio">
                    <input type="radio" name="keysize" id="" value="2048" checked>2048
                </label>
                <label class="form-radio">
                    <input type="radio" name="keysize" id="" value="4096">4096
                </label>     
            </div>
            
        </div>
       
        <input type="submit" value="Generate CSR">
    </div>
</template>
<style scoped>
.wrapper{
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    margin: 2rem auto;
    border-radius: 10px;
    background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    /* border: 1px solid black; */
    /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
h2{
    margin-bottom: 3rem;
    font-weight: bold;
    color: #555;
}
.dname{
    width:900px;
    display: flex;
    margin: .5rem auto;
    /* border: 1px solid black; */
}
.dname span{
    width: 200px;
    text-align: right;
    padding-right: 1.5rem;
    color: #555;
    font-weight: 500;
}
.dname input{
    border: none;
    background: var(--vt-c-white);
    padding: .7rem;
    border-radius: 3px;
    width: 700px;
    font-family: 'Open Sans', sans-serif;
    color: #555;
    font-size: .9rem;
}
.dname .keysize{
    
}
.form-radio{
    cursor: pointer;
    display: inline-block;
    line-height: 1.8rem;
    padding: 0 2rem 0 0;
    position: relative;
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
input[type="radio"]{
    width: 25px;
    color: black;
}
label{
    text-align: start;
}
</style>