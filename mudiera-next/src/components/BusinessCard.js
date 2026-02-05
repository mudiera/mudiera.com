import Link from 'next/link';
import { mapCategory } from '../utils/categoryUtils';

export default function BusinessCard({ business }) {
  const mappedCategory = mapCategory(business.category);

  return (
    <article className="card">
      <div className="card-body">
        <span className="card-meta">{mappedCategory}</span>
        <h3 className="card-title">
          <Link href={`/profile/${business.id}`}>{business.name}</Link>
        </h3>
        <p className="card-text">{business.description}</p>
        <div className="card-footer">
          <svg className="icon-loc" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span>{business.location}</span>
        </div>
      </div>
    </article>
  );
}
