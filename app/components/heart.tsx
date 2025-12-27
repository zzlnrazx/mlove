"use client"

import React, { useEffect } from 'react';

const FloatingHearts: React.FC = () => {
  useEffect(() => {
    const createHeart = (): void => {
      const container = document.getElementById('heart-app-container');
      if (!container) return;

      const heart = document.createElement('span');
      heart.innerText = '❤️';

      // ใช้ Tailwind Classes ผสมกับ Class ที่เราสร้างเอง (animate-heart)
      // text-[24px] คือตัวอย่างการใช้ Arbitrary Value ใน Tailwind
      heart.className = 'absolute bottom-0 select-none pointer-events-none animate-heart text-red-500';

      // สุ่มตำแหน่งแนวนอน
      const leftPos = Math.random() * 100;
      heart.style.left = `${leftPos}vw`;

      // สุ่มขนาด (ถ้าไม่ใช้ Tailwind text-size เราสุ่มใน JS ได้เลย)
      const size = Math.random() * 20 + 15;
      heart.style.fontSize = `${size}px`;

      container.appendChild(heart);

      // ลบออกเมื่อทำงานเสร็จ (4 วินาที)
      setTimeout(() => {
        heart.remove();
      }, 4000);
    };

    // สร้างลูปทุก 0.3 วินาที
    const interval = setInterval(createHeart, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      id="heart-app-container" 
      // ใช้ Tailwind ล้วนๆ ในส่วนของ Container
      className="fixed bottom-0 left-0 w-full h-0 pointer-events-none z-[9999]"
    />
  );
};

export default FloatingHearts;















// อธิบายโค้ด:
// import React, { useEffect } from 'react';

// const FloatingHearts: React.FC = () => {
//   // useEffect ใช้จัดการ Side Effects (ในที่นี้คือการสร้าง Loop ของหัวใจ)
//   useEffect(() => {
    
//     // 1. ฟังก์ชันสร้างหัวใจ (ตัวโรงงานผลิต)
//     const createHeart = (): void => {
//       // ค้นหา "ถัง" หรือ Container ที่เราจะใส่หัวใจลงไป
//       const container = document.getElementById('heart-app-container');
//       if (!container) return; // ถ้าหาถังไม่เจอ ให้หยุดทำงาน (ป้องกัน Error)

//       // สร้าง Element ใหม่ขึ้นมาในอากาศ (ยังไม่แสดงบนหน้าจอ) เป็น Tag <span>
//       const heart = document.createElement('span');
//       heart.innerText = '❤️'; // ใส่ตัวอักษรหัวใจเข้าไป

//       // ใส่ CSS Classes ของ Tailwind
//       // absolute: วางตำแหน่งอิสระ | bottom-0: เริ่มที่ล่างสุด | select-none: ห้ามคลุมดำหัวใจ
//       // pointer-events-none: คลิกทะลุหัวใจได้ | animate-heart-float: เรียกใช้ animation ที่เราตั้งไว้
//       heart.className = 'absolute bottom-0 select-none pointer-events-none animate-heart-float text-red-500';

//       // 2. การสุ่ม (Randomization)
//       // สุ่มตำแหน่งซ้าย-ขวา (0 ถึง 100vw คือความกว้างหน้าจอ)
//       const leftPos = Math.random() * 100;
//       // สุ่มขนาด Font (15px ถึง 35px) เพื่อให้มีดวงเล็กดวงใหญ่
//       const size = Math.random() * 20 + 15;
      
//       // นำค่าที่สุ่มได้ไปใส่ใน Style ของหัวใจดวงนั้นๆ
//       heart.style.left = `${leftPos}vw`;
//       heart.style.fontSize = `${size}px`;

//       // 3. นำหัวใจไปแปะบนหน้าจอ
//       // เอาหัวใจที่เราสร้างและสุ่มค่าเสร็จแล้ว ใส่เข้าไปใน Container
//       container.appendChild(heart);

//       // 4. การทำความสะอาด (Memory Management)
//       // เมื่อเวลาผ่านไป 4 วินาที (หัวใจลอยพ้นจอแล้ว) ให้ลบทิ้งจากหน้าเว็บทันที
//       // เพื่อไม่ให้เครื่องคอมพิวเตอร์ค้างเพราะมี Element เยอะเกินไป
//       setTimeout(() => {
//         heart.remove();
//       }, 4000);
//     };

//     // 5. เริ่มต้นการทำงาน Loop
//     // สั่งให้รันฟังก์ชัน createHeart ทุกๆ 300 มิลลิวินาที (0.3 วินาที)
//     const interval = setInterval(createHeart, 300);

//     // 6. Cleanup Function
//     // ถ้าผู้ใช้ปิดหน้านี้ หรือย้ายหน้า ให้หยุดสร้างหัวใจทันที (ป้องกัน Memory Leak)
//     return () => clearInterval(interval);
    
//   }, []); // [] หมายถึงให้เริ่มทำงานแค่ "ครั้งแรกที่เปิดหน้าเว็บ" เท่านั้น

//   // ส่วนที่แสดงผลจริง (เป็นแค่ Container เปล่าๆ ที่อยู่ด้านล่างสุดของจอ)
//   return (
//     <div 
//       id="heart-app-container" 
//       // fixed: ติดหนึบกับหน้าจอ | bottom-0: ล่างสุด | w-full: เต็มความกว้าง | z-[9999]: อยู่หน้าสุด
//       className="fixed bottom-0 left-0 w-full h-0 pointer-events-none z-[9999]"
//     />
//   );
// };

// export default FloatingHearts;