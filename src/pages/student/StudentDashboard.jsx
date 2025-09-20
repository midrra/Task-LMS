import React from "react";
import Courses from "../../components/student/Courses";
import { Fragment } from "react";
import Quize from "../../components/student/Quize";
import Lessons from "../../components/student/Lessons";
import Examps from "../../components/student/Examps";

function StudentDashboardPage() {
  return (
    <Fragment>
      <Courses />
      <Quize />
      <Lessons />
      <Examps />
    </Fragment>
  );
}

export default StudentDashboardPage;
