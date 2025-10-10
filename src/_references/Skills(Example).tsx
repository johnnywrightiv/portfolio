// NOTE: not using this section currently (FloatingTechIcons sort of represents this visually/interactively, not really "keyword optimized" but this can exist as a section reference for now )

// "use client"

// import { motion } from "framer-motion"
// import { Badge } from "@/components/ui/badge"
// import skillsData from "@/data/skills.json"

// export default function TechnicalSkills() {
//   return (
//     <section id="skills" className="py-section bg-gray-900/80">
//       <div className="container-section">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Experience</h2>
//           <p className="text-white/75 max-w-2xl mx-auto">Technologies and skills I work with</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {skillsData.categories.map((category, index) => (
//             <motion.div
//               key={index}
//               className="glass glass-hover rounded-xl p-6 border border-border"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true, amount: 0.2 }}
//             >
//               <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
//               <div className="flex flex-wrap gap-2">
//                 {category.skills.map((skill, skillIndex) => (
//                   <Badge key={skillIndex} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
//                     {skill}
//                   </Badge>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
