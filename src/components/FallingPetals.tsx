export function FallingPetals() {
  const petals = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 10 + Math.random() * 12;
        const size = 10 + Math.random() * 14;
        const colors = ["#f59e0b", "#ea580c", "#dc2626", "#fbbf24"];
        const color = colors[i % colors.length];
        return (
          <span
            key={i}
            className="absolute top-0 block rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
              animation: `float-petal ${duration}s linear ${delay}s infinite`,
              opacity: 0.7,
            }}
          />
        );
      })}
    </div>
  );
}