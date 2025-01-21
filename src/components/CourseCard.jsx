/**
 * @copyright 2025 Aime Cesaire Mugishawayo
 * @license Apache-2.0
 */

import React from 'react';

// CourseCard component
const CourseCard = ({ name, link, icon }) => {
    return (
        <div className="card bg-zinc-400 hover:bg-zinc-400/70 p-2 rounded-2xl shadow-lg mb-4 ring-1 ring-inset ring-zinc-50/10">
            <h3 className="ml-1 text-xl font-semibold">{icon} {name}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-sky-700/100 hover:text-blue-500 font-medium transition-colors">
                 Course website →
            </a>
        </div>
    );
};

export default CourseCard;