<template>
  <div>
    <input type="text" name="search" v-model="search" /><br />
    <table class="table table-dark">
      <tr v-for="(item,index) in students" v-bind:key="item._id">
        <td>{{ item.name }}</td>
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
</template>

<script>
import axios from "axios";

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
    axios.get("http://34.82.81.113:3000/students").then((response) => {
      console.log(response.data);
      this.students = response.data;
    });
    //this.students = stud;
  },
  methods: {
    deleteStudent(Id) {
      axios
        .delete(`http://34.82.81.113:3000/students/${Id}`)
        .then((response) => {
          this.students = this.students.filter((st) => st._id != Id);
        });
    },
    addStudent() {
      axios
        .post("http://34.82.81.113:3000/students", {
          ...this.student,
        })
        .then((response) => {
          this.students.push(response.data);
        });
    },
    putToEdit(index) {    
        this.student = {...this.students[index]};
        this.editStudentId = index;
    },
    editStudent() {
      axios
        .put(`http://34.82.81.113:3000/students/${this.students[this.editStudentId]._id}`, {
          ...this.student,
        })
        .then((response) => {
          // for (let i = 0; i < this.students.length; i++) {
          //   if (this.students[i]._id == this.editStudentId) {
          //     this.students[i] = response.data;
          //   }
          // }
          this.students[this.editStudentId] = response.data;
        });
    },
  },
};
</script>

<style scoped></style>
