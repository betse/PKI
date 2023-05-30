<template>
  <div class="content">
    <div class="wrapper">
      <h3>Generate a Certificate Signing Request</h3>

      <div class="dname">
        <span>Common Name </span>
        <input type="text" v-model="model.csr.commonName" />
      </div>
      <div class="dname">
        <span>Organization </span>
        <input type="text" v-model="model.csr.org" />
      </div>
      <div class="dname">
        <span>Organizational Unit </span>
        <input type="text" v-model="model.csr.orgUnit" />
      </div>
      <div class="dname">
        <span>Locality </span>
        <input type="text" v-model="model.csr.locality" />
      </div>
      <div class="dname">
        <span>State </span>
        <input type="text" v-model="model.csr.state" />
      </div>
      <div class="dname">
        <span>Country </span>
        <select id="country" v-model="model.csr.selectedCountry">
          <option v-for="country in countries" :value="country.code" :key="country.code">
            {{ country.name }}
          </option>
        </select>
      </div>
      <div class="dname">
        <span>Key Size </span>
        <div class="keysize">
          <label class="form-radio">
            <input
              type="radio"
              name="keysize"
              id=""
              value="1024"
              v-model="model.csr.keySize"
            />1024
          </label>
          <label class="form-radio">
            <input
              type="radio"
              name="keysize"
              id=""
              value="2048"
              v-model="model.csr.keySize"
            />2048
          </label>
          <label class="form-radio">
            <input
              type="radio"
              name="keysize"
              id=""
              value="4096"
              v-model="model.csr.keySize"
            />4096
          </label>
        </div>
      </div>

      <input type="submit" value="Generate CSR" @click="generatecsr()" />
    </div>
  </div>
</template>
<script>
import countriesData from "../assets/countries.json";
export default {
  data() {
    return {
      model: {
        csr: {
          commonName: "",
          org: "",
          orgUnit: "",
          locality: "",
          state: "",
          selectedCountry: "",
          keySize: "2048",
        },
      },
      // Stores the selected country code
      countries: [],
    };
  },
  mounted() {
    this.loadCountries();
  },
  methods: {
    loadCountries() {
      this.countries = countriesData;
    },
    generatecsr() {
      console.log(this.model.csr);
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  padding: 0 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: 2rem auto;
  border-radius: 10px;
  /* background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%); */
  /* background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%); */

  /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
  /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */
  /* border: 1px solid black; */
}
h3 {
  margin-bottom: 1rem;
  font-weight: bold;
  color: #555;
  padding-left: 0.5rem;
  border-left: 5px solid rgb(37, 126, 243);
}
.dname {
  width: 900px;
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  /* border: 1px solid black; */
}
.dname span {
  width: 200px;
  text-align: left;
  padding-bottom: 0.3rem;
  color: #555;
  font-weight: 500;
}
.dname input,
select {
  border: none;
  background: var(--vt-c-white-mute);
  padding: 0.7rem;
  border-radius: 3px;
  width: 700px;
  font-family: "Open Sans", sans-serif;
  color: #555;
  font-size: 0.9rem;
}
.dname .keysize {
}
.form-radio {
  cursor: pointer;
  display: inline-block;
  line-height: 1.8rem;
  padding: 0 2rem 0 0;
  position: relative;
}
input[type="submit"] {
  background: var(--vt-c-white);
  border: none;
  padding: 0.7rem 1.5rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  font-family: "Open Sans", sans-serif;
  background: rgb(37, 126, 243);
  color: white;
  font-weight: bold;
}
input[type="radio"] {
  width: 25px;
  color: black;
}
label {
  text-align: start;
}
</style>
