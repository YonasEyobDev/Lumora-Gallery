import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`section-pad ${className}`}>
      <Container>
        {title && (
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && (
              <p className="text-aqua mb-3 text-xs font-semibold uppercase tracking-[0.25em]">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {subtitle && <p className="text-dim mt-4">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}