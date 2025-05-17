"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { CustomImage } from "./CustomImage";
import assets from "../../../../public/assets/assetsManager";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
        {/* Left Section - Brand & Description */}
        <div className="flex-1">
          <div className="mb-4 flex items-center">
            <CustomImage
              alt="logo"
              src={assets.image.Logo}
              className="w-10  mr-2"
              width={500}
              height={500}
            />
            <span className="text-xl font-semibold">InQuir</span>
          </div>

          <p className="text-gray-400 mb-6 text-sm">
            INQUIR is an innovative platform designed to connect companies
            seeking product feedback with skilled freelancers who provide
            insightful reviews. By streamlining the feedback process, INQUIR
            enables businesses to enhance their products before launch, ensuring
            a superior user experience.
          </p>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-400" />
              <div className="text-sm">
                <p>Korba Chhattisgarh 495452</p>
                <p>India</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18} className="text-blue-400" />
              <span className="text-sm">abhaym1205@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400" />
              <span className="text-sm">+91 777-0956-045</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-6">
            <Link
              href="#"
              className="rounded-full bg-blue-600 p-2 flex items-center justify-center"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-blue-400 p-2 flex items-center justify-center"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-pink-600 p-2 flex items-center justify-center"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-blue-700 p-2 flex items-center justify-center"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Middle Section - Pages */}
        <div className="lg:w-48">
          <h3 className="text-xl mb-4">Pages</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-gray-400 hover:text-white transition"
            >
              Features
            </Link>
            <Link
              href="/hire"
              className="text-gray-400 hover:text-white transition"
            >
              Hire
            </Link>
            <Link
              href="/jobs"
              className="text-gray-400 hover:text-white transition"
            >
              Jobs
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1">
          <h3 className="text-xl mb-4">Contact Us</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="First Name"
                className="bg-transparent border border-gray-700"
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border border-gray-700"
              />
            </div>
            <Input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-700"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border border-gray-700"
            />
            <Input
              type="text"
              placeholder="Message"
              className="bg-transparent border border-gray-700 h-24"
            />
            <Button className="w-full bg-blue-800 hover:bg-blue-900">
              Submit <span className="ml-2">➔</span>
            </Button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-10 text-sm text-center text-gray-500">
        <p>Designed and Developed by Abhay Mishra</p>
        <p>© 2024 abhaymishra.tech</p>
      </div>
    </footer>
  );
}
