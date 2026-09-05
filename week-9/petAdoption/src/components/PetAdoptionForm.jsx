import { useState } from 'react';
import { validation } from '../utils/validation';
import AdopterData from './AdopterData';
const initial = { petName: '', breed: '', adopterName: '', email: '', phone: '', petType: 'Dog' };
const labels = {
  petName: 'Pet name',
  breed: 'Breed',
  adopterName: 'Your name',
  email: 'Email',
  phone: 'Phone',
};
export default function PetAdoptionForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [adopters, setAdopters] = useState([]);
  const [message, setMessage] = useState('');
  function change(event) {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => validation(name, value, previous));
  }
  function submit(event) {
    event.preventDefault();
    let next = {};
    for (const [name, value] of Object.entries(values)) next = validation(name, value, next);
    setErrors(next);
    if (Object.values(next).some(Boolean)) {
      setMessage('Please correct the highlighted fields.');
      return;
    }
    setAdopters((previous) => [
      ...previous,
      {
        ...Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()])),
        id: crypto.randomUUID(),
      },
    ]);
    setValues(initial);
    setErrors({});
    setMessage('Adoption application added.');
  }
  return (
    <>
      <form onSubmit={submit} noValidate>
        <h2>Adoption details</h2>
        <div className="grid">
          {Object.entries(labels).map(([name, label]) => (
            <label key={name}>
              {label}
              <input
                name={name}
                value={values[name]}
                onChange={change}
                type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'}
                required
                maxLength={name === 'phone' ? 10 : 150}
                aria-invalid={!!errors[name]}
                aria-describedby={name + '-error'}
              />
              <small id={name + '-error'} className="error">
                {errors[name]}
              </small>
            </label>
          ))}
        </div>
        <label>
          Pet type
          <select name="petType" value={values.petType} onChange={change}>
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            <option>Other</option>
          </select>
        </label>
        <button>Submit application</button>
        <p role="status">{message}</p>
      </form>
      <AdopterData adopters={adopters} />
    </>
  );
}
