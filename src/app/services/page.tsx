import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <h3>We offer a range of services tailored to meet your needs.</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eos suscipit deserunt voluptatibus sit temporibus aliquam iure molestiae voluptatum quam magnam, est magni blanditiis sunt ad dicta facere a dolorem!</p>
      <Link href="/services/nest">Go to Nested Page</Link>
    </div>
  );
}