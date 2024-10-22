import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddCompanyPopup({ onClose }) {
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCompanyLogo(event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCompanyLogo(event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    document.getElementById("logo-upload").click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <Card className="w-full max-w-[480px] bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between p-6 pb-2">
          <CardTitle className="text-xl font-bold">Add Your Company</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-sm text-gray-500 mb-6">
            Add your company within 2min
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name
                </label>
                <Input
                  id="companyName"
                  placeholder="Google"
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="recruiterName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Recruiter Name
                </label>
                <Input
                  id="recruiterName"
                  placeholder="Kevin D alwis"
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="recruiterMobile"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Recruiter Mobile No
                </label>
                <Input
                  id="recruiterMobile"
                  placeholder="+9496997979"
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="recruiterEmail"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Recruiter Email Address
                </label>
                <Input
                  id="recruiterEmail"
                  type="email"
                  placeholder="kevin@gmail.com"
                  className="w-full"
                />
              </div>
            </div>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={handleClick}
            >
              {companyLogo ? (
                <img
                  src={companyLogo}
                  alt="Company Logo"
                  className="max-h-24 mx-auto"
                />
              ) : (
                <>
                  <p className="text-purple-600 font-medium">
                    Click to Upload or Drag and drop here
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Don&apos;t upload square size images
                  </p>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileInput}
                id="logo-upload"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Build Custom user flow and managing all kind of developing method with better ux and ui.."
                rows={3}
                className="w-full"
              />
            </div>
          </form>
        </CardContent>
        <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
          <Button
            variant="outline"
            className="text-gray-700 hover:text-gray-900"
          >
            Learn More
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Add Company
          </Button>
        </div>
      </Card>
    </div>
  );
}
