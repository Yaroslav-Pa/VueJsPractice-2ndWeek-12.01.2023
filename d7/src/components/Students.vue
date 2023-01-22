<template>
  <div>
    <input type="text" name="search" v-model="search" /><br />
    <h1>{{ studentsCount }}</h1>
    <table class="table table-dark">
      <tr v-for="(item, index) in students" v-bind:key="item._id">
        <router-link v-bind:to="'/student-info/' + item._id">
          <td>{{ item.name }}</td>
        </router-link>
        <td><input type="checkbox" v-model="item.isDonePr" /></td>
        <td>{{ item.group }}</td>
        <td><a href="#" @click="deleteStudent(item._id)">Видалити</a></td>
        <td>
          <a href="#" @click="putToEdit(index)"
            ><img
              src="https://img.icons8.com/material-outlined/24/null/pencil-tip.png"
          /></a>
        </td>
      </tr>
    </table>

    <input v-model="student.name" />
    <input type="checkbox" v-model="student.isDonePr" />
    <select v-model="student.group">
      <option value="RPZ 19 1/9">RPZ 19 1/9</option>
      <option value="RPZ 19 2/9">RPZ 19 2/9</option>
    </select>
    <button @click="addStudent()">Add student</button>
    <button @click="editStudent()">Edit student</button>
  </div>
  <div>
    <h1>Darkmode: {{ getWhatMode }}</h1>
    <button @click="ninjaTurtuls()">Light-dark</button>
  </div>
</template>

<script>
const API_HOST = process.env.API_HOST;

export default {
  data() {
    return {
      students: [],
      newmark: "",
      newgroup: "",
      newisDonePr: "",
      newname: "",
      search: "",
      priece: "",
      editStudentInput: "",
      editStudentId: "",
      student: { pib: "", zdav: false, group: "" },
    };
  },
  mounted: function () {
    this.axios.get(`${API_HOST}/students`).then((response) => {
      console.log(response.data);
      this.students = response.data;
      this.$store.commit("setCount", this.students.length);
    });
    //this.students = stud;
  },
  computed: {
    studentsCount() {
      return this.$store.getters.getCount;
    },
    getWhatMode() {
      return this.$store.getters.getMode;
    },
  },
  methods: {
    ninjaTurtuls() {
      this.$store.commit("setMode");
    },
    deleteStudent(Id) {
      axios.delete(`${API_HOST}/students/${Id}`).then((response) => {
        this.students = this.students.filter((st) => st._id != Id);
      });
    },
    addStudent() {
      this.axios
        .post(`${API_HOST}/students`, {
          ...this.student,
        })
        .then((response) => {
          this.students.push(response.data);
        });
      (this.student.name = ""),
        (this.student.zdav = false),
        (this.student.group = "");
    },
    putToEdit(index) {
      this.student = { ...this.students[index] };
      this.editStudentId = index;
    },
    editStudent() {
      this.axios
        .put(`${API_HOST}/students/${this.students[this.editStudentId]._id}`, {
          ...this.student,
        })
        .then((response) => {
          // for (let i = 0; i <script this.students.length; i++) {
          //   if (this.students[i]._id == this.editStudentId) {
          //     this.students[i] = response.data;
          //   }
          // }
          this.students[this.editStudentId] = response.data;
          (this.student.name = ""),
            (this.student.zdav = false),
            (this.student.group = "");
        });
    },
  },
};
</script>

<style scoped></style>
