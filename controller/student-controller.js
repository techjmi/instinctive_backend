 
// const supabase = require('../utility/createClient');
import {supabase} from '../utility/createClient.js';

// Add a student
export const addStudent = async (req, res) => {
  const { studentName, cohort, courses, status } = req.body;

  try {
    const { data, error } = await supabase
      .from('student')
      .insert([{ studentName, cohort, courses, status }]);

    if (error) throw error;

    return res.status(201).json({
      success: true,
      message: 'Student added successfully',
      student: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to add student',
      error: error.message,
    });
  }
};

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const { data, error } = await supabase.from('student').select('*');

    if (error) throw error;

    return res.status(200).json({
      success: true,
      students: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch students',
      error: error.message,
    });
  }
};

// Get a student by ID
export const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('student')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    return res.status(200).json({
      success: true,
      student: data,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: 'Student not found',
      error: error.message,
    });
  }
};

// Update a student
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { studentName, cohort, courses, status } = req.body;

  try {
    const { data, error } = await supabase
      .from('student')
      .update({ studentName, cohort, courses, status})
      .eq('id', id);

    if (error) throw error;

    return res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      student: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update student',
      error: error.message,
    });
  }
};

// Delete a student
export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase.from('student').delete().eq('id', id);

    if (error) throw error;

    return res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      student: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete student',
      error: error.message,
    });
  }
};


