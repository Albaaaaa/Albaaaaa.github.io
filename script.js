/* Interacciones controladas mediante JavaScript */

.menu a[aria-current="page"] {
  color: var(--azul);
}

.menu a[aria-current="page"]::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 4px;
  background: var(--azul);
  border-radius: 999px;
}

.elemento-animado {
  opacity: 0;
  transform: translateY(28px);
}

.elemento-animado.elemento-visible {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.65s ease,
    transform 0.65s ease;
}

@media (prefers-reduced-motion: reduce) {
  .elemento-animado,
  .elemento-animado.elemento-visible {
    opacity: 1;
    transform: none;
  }
}
