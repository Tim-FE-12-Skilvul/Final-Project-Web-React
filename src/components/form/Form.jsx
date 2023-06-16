import './Form.css'; 

function Form () {
  return (
 <>
 
 <form class="form-stunting">
        <label for="age">Umur (Bulan):</label>
        <input type="number" id="age" name="age" required /><br />

        <label for="sex">Jenis Kelamin:</label>
        <select id="sex" name="sex" required>
        <option value="">--Silahkan Pilih--</option>
        <option value="male">Pria</option>
        <option value="female">Wanita</option></select
      ><br />

      <label for="height">Tinggi (cm):</label>
      <input type="number" id="height" name="height" required /><br />

      <label for="weight">Berat (kg):</label>
      <input type="number" id="weight" name="weight" required /><br />

      <input type="submit" value="Check Status" />
      <div id="output"></div>
    </form>
 
 </>
  )
  
}
export default Form;