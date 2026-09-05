import { Course } from '../types';
interface Props {
  courses: Course[];
  owned: string[];
  admin: boolean;
  busy: boolean;
  onPurchase: (id: string) => void;
  onEdit: (course: Course) => void;
}
export default function Courses({ courses, owned, admin, busy, onPurchase, onEdit }: Props) {
  return (
    <div className="grid">
      {!courses.length && <p>No courses to show yet.</p>}
      {courses.map((course) => (
        <article key={course._id}>
          {course.imageLink && (
            <img
              src={course.imageLink}
              alt=""
              style={{ width: '100%', height: 160 }}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          )}
          <span className="tag">
            {admin ? (course.published ? 'Published' : 'Draft') : 'COURSE'}
          </span>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <p>
            <strong>₹{course.price.toLocaleString('en-IN')}</strong>
          </p>
          {admin ? (
            <button onClick={() => onEdit(course)}>Edit course</button>
          ) : (
            <button
              disabled={busy || owned.includes(course._id)}
              onClick={() => onPurchase(course._id)}
            >
              {owned.includes(course._id) ? 'Enrolled' : 'Enroll in course'}
            </button>
          )}
        </article>
      ))}
    </div>
  );
}
