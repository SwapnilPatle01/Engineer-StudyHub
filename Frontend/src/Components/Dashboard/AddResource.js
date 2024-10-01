import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Checkbox, Select, Upload, Input, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const AddResource = ({ onClose, onSubmit, initialValues }) => {
  const [university, setUniversity] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [pyqFile, setPyqFile] = useState(null);
  const [noteFile, setNoteFile] = useState(null);
  const [title, setTitle] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDes, setVideoDes] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [fileList, setFileList] = useState([]);

  const { Option } = Select;
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      // Set the form fields with initial values
      form.setFieldsValue({
        university: initialValues.university,
        branch: initialValues.branch,
        subject: initialValues.subject,
        semester: initialValues.semester,
        pyqtitle: initialValues.title,
        notestitle: initialValues.noteTitle,
        videoTitle: initialValues.videoTitle,
        videoDescription: initialValues.videoDes,
        videoLink: initialValues.videoLink,
      });
      setThumbnailPreview(initialValues.thumbnailPreview);
      setSelectedOptions(initialValues.selectedOptions || []);
      // Set the file inputs if needed
      if (initialValues.file) setPyqFile(initialValues.file);
      if (initialValues.fileNote) setNoteFile(initialValues.fileNote);
    } else {
      // Reset form fields for adding a new resource
      form.resetFields();
    }
  }, [initialValues, form]);

  const onCheckboxChange = (checkedValues) => {
    setSelectedOptions(checkedValues);
  };

  const handleFileChange = (info) => {
    const file = info.fileList[0]?.originFileObj;
    if (file && file.type === "application/pdf") {
      setPyqFile(file);
      setFileList(info.fileList);
    } else {
      message.error("Please select a valid PDF file.");
      setFileList([]);
    }
  };

  const handleFileNoteChanges = (info) => {
    const file = info.fileList[0]?.originFileObj;
    if (file && file.type === "application/pdf") {
      setNoteFile(file);
    } else {
      message.error("Please select a valid PDF file.");
    }
  };

  const handleThumbnailChange = (info) => {
    const file = info.fileList[0]?.originFileObj;
    if (file && file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      setThumbnailPreview(imageURL);
    } else {
      message.error("Please upload a valid image file for the thumbnail.");
    }
  };
  const validateCheckboxGroup = (rule, value) => {
    if (!value || value.length < 1) {
      return Promise.reject(
        new Error("Please select at least one resource type!")
      );
    }
    return Promise.resolve();
  };

  const handleSubmit = () => {
    const newSubmission = {
      university,
      branch,
      subject,
      semester,
      title,
      noteTitle,
      videoTitle,
      videoDes,
      videoLink,
      thumbnailPreview,
      file: pyqFile,
      fileNote: noteFile,
      selectedOptions, // Ensure you include the selected resource types
    };

    onSubmit(newSubmission);
    message.success("Resource added successfully!");
    form.resetFields(); // Clear input fields after submission
  };

  return (
    <div className="add-container" style={{backgroundColor:"#f5f5f5", borderRadius:"6px"}}>
      <h1>{initialValues ? "Edit Resource" : "Add Resources"}</h1>
      <div className="add-content">
        <Form onFinish={handleSubmit} form={form} layout="vertical">
          {/* University */}
          <Form.Item
            label="University"
            name="university"
            rules={[
              { required: true, message: "Please select the University!" },
            ]}
          >
            <Select
              placeholder="Select University"
              value={university}
              onChange={setUniversity}
            >
              <Option value="RGPV">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)
              </Option>
              <Option value="DAVV">Devi Ahilya Vishwavidyalaya (DAVV)</Option>
              <Option value="IITD">
                Indian Institute of Technology Delhi (IITD)
              </Option>
              <Option value="IITB">
                Indian Institute of Technology Bombay (IITB)
              </Option>
              <Option value="IIMB">
                Indian Institute of Management Bangalore (IIMB)
              </Option>
              <Option value="DU">University of Delhi (DU)</Option>
              <Option value="JNU">Jawaharlal Nehru University (JNU)</Option>
              <Option value="JNU">Rashtrasant Tukdoji Maharaj University (RTMNU)</Option>
              <Option value="XYZ">XYZ University</Option>
            </Select>
          </Form.Item>

          {/* Branch */}
          <Form.Item
            label="Branch"
            name="branch"
            rules={[{ required: true, message: "Please select the branch!" }]}
          >
            <Select
              placeholder="Select Branch"
              value={branch}
              onChange={setBranch}
            >
              <Option value="EC">Electronics and Communication</Option>
              <Option value="CS">Computer Science</Option>
              <Option value="ME">Mechanical Engineering</Option>
              <Option value="CE">Civil Engineering</Option>
              <Option value="IT">Information Technology</Option>
              <Option value="EE">Electrical Engineering</Option>
              <Option value="BT">Biotechnology</Option>
              <Option value="AE">Aerospace Engineering</Option>
            </Select>
          </Form.Item>

          {/* Semester */}
          <Form.Item
            label="Semester"
            name="semester"
            rules={[{ required: true, message: "Please select the semester!" }]}
          >
            <Select
              placeholder="Select Semester"
              value={semester}
              onChange={setSemester}
            >
              <Option value="1st Semester">1st Semester</Option>
              <Option value="2nd Semester">2nd Semester</Option>
              <Option value="3rd Semester">3rd Semester</Option>
              <Option value="4th Semester">4th Semester</Option>
              <Option value="5th Semester">5th Semester</Option>
              <Option value="6th Semester">6th Semester</Option>
              <Option value="7th Semester">7th Semester</Option>
              <Option value="8th Semester">8th Semester</Option>
            </Select>
          </Form.Item>

          {/* Subject */}
          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please select the subject!" }]}
          >
            <Select
              placeholder="Select Subject"
              value={subject}
              onChange={setSubject}
            >
              <Option value="Data Structures">Data Structures</Option>
              <Option value="Algorithms">Algorithms</Option>
              <Option value="Operating Systems">Operating Systems</Option>
              <Option value="Database Systems">Database Systems</Option>
              <Option value="Computer Networks">Computer Networks</Option>
              <Option value="Software Engineering">Software Engineering</Option>
              <Option value="Machine Learning">Machine Learning</Option>
              <Option value="Artificial Intelligence">
                Artificial Intelligence
              </Option>
            </Select>
          </Form.Item>

          {/* Resource Type Checkbox */}
          <Form.Item
            label="Resource Type"
            name="resourceType"
            rules={[{ validator: validateCheckboxGroup }]}
          >
            <Checkbox.Group onChange={onCheckboxChange}>
              <Checkbox value="PYQ">PYQ</Checkbox>
              <Checkbox value="Notes">Notes</Checkbox>
              <Checkbox value="Video">Video</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          {/* PYQ */}
          {selectedOptions.includes("PYQ") && (
            <>
              <Form.Item
                label="PYQ (Previous Year Questions) Title"
                name="pyqtitle"
                rules={[
                  { required: true, message: "Please provide the PYQ Title!" },
                ]}
              >
                <Input
                  placeholder="Enter Notes Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Upload PYQ PDF"
                name="pyqFile"
                rules={[
                  { required: true, message: "Please upload the PYQ PDF!" },
                ]}
              >
                <Upload
                  onChange={handleFileChange}
                  beforeUpload={() => false}
                  accept="application/pdf"
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </>
          )}

          {/* Notes */}
          {selectedOptions.includes("Notes") && (
            <>
              <Form.Item
                label="Notes Title"
                name="notestitle"
                rules={[
                  {
                    required: true,
                    message: "Please provide the Notes Title!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Notes Title"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Upload Notes PDF"
                name="noteFile"
                rules={[
                  { required: true, message: "Please upload the Notes PDF!" },
                ]}
              >
                <Upload
                  onChange={handleFileNoteChanges}
                  beforeUpload={() => false}
                  accept="application/pdf"
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </>
          )}

          {/* Video */}
          {selectedOptions.includes("Video") && (
            <>
              <Form.Item
                label="Video Lecture Title"
                name="videoTitle"
                rules={[
                  {
                    required: true,
                    message: "Please provide the Video Title!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Video Title"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Video Description"
                name="videoDescription"
                rules={[
                  {
                    required: true,
                    message: "Please provide a description for the video!",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Enter Video Description"
                  value={videoDes}
                  onChange={(e) => setVideoDes(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Video Link"
                name="videoLink"
                rules={[
                  { required: true, message: "Please provide the Video Link!" },
                ]}
              >
                <Input
                  placeholder="Enter Video Link"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Thumbnail Image" name="thumbnail">
                <Upload
                  beforeUpload={() => false}
                  onChange={handleThumbnailChange}
                >
                  <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
                </Upload>
                {thumbnailPreview && (
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail"
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
              </Form.Item>
            </>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#553CDF",
                border:"none",
              }}
            >
              {initialValues ? "Update Resource" : "Add Resource"}
            </Button>
            <Button onClick={onClose} style={{borderColor:"#553CDF", color:"#553CDF"}}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddResource;
