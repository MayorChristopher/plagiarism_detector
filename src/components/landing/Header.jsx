import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-slate-900">
              Plagiarism Detector
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                Get Started
              </Button>
            </DialogTrigger>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
