"use client";
import { motion } from "framer-motion";

export default function Template({
  children,
  duration = 1, // Durasi animasi
  initialScale = 0.98, // Skala awal
  initialY = 20, // Posisi Y awal
  animateScale = 1, // Skala akhir
  animateY = 0, // Posisi Y akhir
  initialOpacity = 0, // Opasitas awal
  animateOpacity = 1, // Opasitas akhir
  initialRotate = 0, // Rotasi awal
  animateRotate = 0, // Rotasi akhir
  ease = "easeInOut", // Jenis easing
  delay = 0, // Delay sebelum animasi dimulai
  type = "tween", // Jenis transisi (spring, tween, dll.)
  viewportOnce = true, // Animasi hanya dipicu sekali
  viewportAmount = 0.8, // Persentase elemen yang harus terlihat di viewport
}) {
  return (
    <motion.div
      initial={{
        opacity: initialOpacity,
        scale: initialScale,
        y: initialY,
        rotate: initialRotate,
      }}
      whileInView={{
        opacity: animateOpacity,
        scale: animateScale,
        y: animateY,
        rotate: animateRotate,
        transition: {
          duration: duration,
          ease: ease,
          delay: delay,
          type: type,
        },
      }}
      viewport={{
        once: viewportOnce,
        amount: viewportAmount,
      }}
    >
      {children}
    </motion.div>
  );
}
