import Model from "app/utils/model";
import { Student } from "app/schemas/students";

class Students extends Model<Student> {
  constructor() {
    super("students");
  }
}

export default Students;
