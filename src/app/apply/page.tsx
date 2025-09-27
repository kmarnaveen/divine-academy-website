"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  User,
  GraduationCap,
  Phone,
  Mail,
  Calendar,
  MapPin,
  CheckCircle,
  Upload,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { number: 1, title: "Student Information", icon: User },
    { number: 2, title: "Academic Details", icon: GraduationCap },
    { number: 3, title: "Parent/Guardian Info", icon: Phone },
    { number: 4, title: "Documents & Submit", icon: FileText },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-primary">
              🎓 Admissions 2025-26
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Apply to Divine International Academy
            </h1>
            <p className="text-xl text-blue-100">
              Take the first step towards your child's bright future. Join our
              family of learners.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = step.number === currentStep;
                  const isCompleted = step.number < currentStep;

                  return (
                    <div key={step.number} className="flex items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          isCompleted
                            ? "bg-emerald-500 text-white"
                            : isActive
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <Icon className="h-6 w-6" />
                        )}
                      </div>
                      <div className="ml-3">
                        <p
                          className={`text-sm font-medium ${
                            isActive
                              ? "text-primary"
                              : isCompleted
                              ? "text-emerald-600"
                              : "text-gray-500"
                          }`}
                        >
                          Step {step.number}
                        </p>
                        <p
                          className={`text-xs ${
                            isActive
                              ? "text-primary"
                              : isCompleted
                              ? "text-emerald-600"
                              : "text-gray-500"
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`w-16 h-0.5 mx-4 ${
                            isCompleted ? "bg-emerald-500" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Application Form */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Content */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    {/* Step 1: Student Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold font-heading text-primary mb-2">
                            Student Information
                          </h2>
                          <p className="text-gray-600">
                            Please provide basic information about the student
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              First Name *
                            </label>
                            <Input placeholder="Enter student's first name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name *
                            </label>
                            <Input placeholder="Enter student's last name" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Date of Birth *
                            </label>
                            <Input type="date" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Gender *
                            </label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address *
                          </label>
                          <Textarea
                            placeholder="Enter complete address"
                            rows={3}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City *
                            </label>
                            <Input placeholder="Enter city" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              PIN Code *
                            </label>
                            <Input placeholder="Enter PIN code" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Academic Details */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold font-heading text-primary mb-2">
                            Academic Details
                          </h2>
                          <p className="text-gray-600">
                            Academic background and class preference
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Applying for Class *
                            </label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select class" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="nursery">Nursery</SelectItem>
                                <SelectItem value="kg1">KG-I</SelectItem>
                                <SelectItem value="kg2">KG-II</SelectItem>
                                <SelectItem value="class1">Class 1</SelectItem>
                                <SelectItem value="class2">Class 2</SelectItem>
                                <SelectItem value="class3">Class 3</SelectItem>
                                <SelectItem value="class4">Class 4</SelectItem>
                                <SelectItem value="class5">Class 5</SelectItem>
                                <SelectItem value="class6">Class 6</SelectItem>
                                <SelectItem value="class7">Class 7</SelectItem>
                                <SelectItem value="class8">Class 8</SelectItem>
                                <SelectItem value="class9">Class 9</SelectItem>
                                <SelectItem value="class10">
                                  Class 10
                                </SelectItem>
                                <SelectItem value="class11">
                                  Class 11
                                </SelectItem>
                                <SelectItem value="class12">
                                  Class 12
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Academic Session *
                            </label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select session" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="2025-26">2025-26</SelectItem>
                                <SelectItem value="2026-27">2026-27</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Previous School Name
                          </label>
                          <Input placeholder="Enter previous school name (if applicable)" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Previous Class/Grade
                            </label>
                            <Input placeholder="Last class attended" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Percentage/Grade
                            </label>
                            <Input placeholder="Last academic performance" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Any Special Needs or Requirements
                          </label>
                          <Textarea
                            placeholder="Please mention any special requirements"
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 3: Parent/Guardian Information */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold font-heading text-primary mb-2">
                            Parent/Guardian Information
                          </h2>
                          <p className="text-gray-600">
                            Contact details and information of parent/guardian
                          </p>
                        </div>

                        <div className="space-y-6">
                          <div className="border-b pb-6">
                            <h3 className="text-lg font-semibold mb-4">
                              Father's Information
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Input placeholder="Father's full name *" />
                              <Input placeholder="Occupation" />
                              <Input placeholder="Phone number *" type="tel" />
                              <Input placeholder="Email address" type="email" />
                            </div>
                          </div>

                          <div className="border-b pb-6">
                            <h3 className="text-lg font-semibold mb-4">
                              Mother's Information
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Input placeholder="Mother's full name *" />
                              <Input placeholder="Occupation" />
                              <Input placeholder="Phone number" type="tel" />
                              <Input placeholder="Email address" type="email" />
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-4">
                              Emergency Contact
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Input placeholder="Emergency contact name *" />
                              <Input
                                placeholder="Emergency phone number *"
                                type="tel"
                              />
                              <Input placeholder="Relationship to student *" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Documents & Submit */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold font-heading text-primary mb-2">
                            Documents & Submit
                          </h2>
                          <p className="text-gray-600">
                            Upload required documents and submit your
                            application
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                            <div className="text-center">
                              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                              <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Upload Documents
                              </h3>
                              <p className="text-gray-600 mb-4">
                                Click to upload or drag and drop files
                              </p>
                              <Button variant="outline">Choose Files</Button>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-start space-x-3">
                              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                              <div>
                                <h4 className="text-sm font-medium text-blue-800">
                                  Required Documents
                                </h4>
                                <ul className="mt-2 text-sm text-blue-700 space-y-1">
                                  <li>• Birth Certificate (scanned copy)</li>
                                  <li>
                                    • Previous School Transfer Certificate (if
                                    applicable)
                                  </li>
                                  <li>• Last Academic Report Card</li>
                                  <li>• Passport Size Photographs (2 nos.)</li>
                                  <li>• Address Proof (Aadhaar/Passport)</li>
                                  <li>• Medical Certificate</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-accent/10 p-6 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">
                            Application Fee
                          </h4>
                          <p className="text-gray-600 mb-4">
                            Application processing fee: ₹500 (non-refundable)
                            <br />
                            Payment can be made online or at the school office.
                          </p>
                          <Button
                            variant="outline"
                            className="border-primary text-primary"
                          >
                            Pay Application Fee
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-8 border-t">
                      {currentStep > 1 && (
                        <Button
                          variant="outline"
                          onClick={() => setCurrentStep(currentStep - 1)}
                        >
                          Previous
                        </Button>
                      )}

                      <div className="ml-auto">
                        {currentStep < totalSteps ? (
                          <Button
                            onClick={() => setCurrentStep(currentStep + 1)}
                            className="bg-primary hover:bg-primary/90"
                          >
                            Next Step
                          </Button>
                        ) : (
                          <Button className="bg-accent hover:bg-accent/90 text-primary">
                            Submit Application
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Important Dates
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Application Opens:</span>
                        <span className="font-medium">Jan 15, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Date:</span>
                        <span className="font-medium">Apr 15, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Entrance Test:</span>
                        <span className="font-medium">Mar 10, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Results:</span>
                        <span className="font-medium">Mar 20, 2025</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-accent" />
                        <span>+91 9876543211</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-accent" />
                        <span>admissions@divineacademy.edu.in</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>Visit Admissions Office</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-primary text-primary"
                    >
                      Contact Admissions
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
