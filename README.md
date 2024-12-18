DOCUMENTACION DEL PROCESO DE DESARROLLO FRONT END

_______________Scafolding inicial_______________

src/
│
├── app/
│   ├── page.tsx                     // Página principal que cargará el Sidebar y renderizará módulos
│   ├── dashboard/                   // Carpeta para el dashboard de administración
│   │   └── page.tsx                 // Página principal del Dashboard (cargará módulos)
│
├── components/                      // Componentes reutilizables
│   ├── Sidebar.tsx                  // Barra lateral para cambiar vistas dentro del dashboard
│   ├── ProductList.tsx              // Lista de productos (módulo)
│   ├── ProductCard.tsx              // Card de producto individual (componente reutilizable)
│   ├── ProductForm.tsx              // Formulario de agregar/editar producto (módulo)
│   ├── CategoryList.tsx             // Lista de categorías (módulo)
│   ├── CategoryForm.tsx            // Formulario para agregar/editar categoría (módulo)
│   ├── Modal.tsx                    // Componente Modal reutilizable
│   ├── Notification.tsx             // Componente de notificación
│   └── FilterPanel.tsx              // Filtros dinámicos para las vistas (componente reutilizable)
│
├── styles/                          // Estilos globales y específicos de vistas
│   ├── globals.css                  // Estilos globales
│   └── dashboard.module.css         // Estilos específicos para el dashboard
│
└── utils/                           // Funciones utilitarias
    ├── fetcher.ts                   // Funciones para manejar APIs
    └── validators.ts                // Validaciones de formularios, entradas, etc.

________________________________________________________________________________________

DETALLE DE COMPONENTES Y FUNCIONALIDAD

Detalle de Componentes y Funcionalidades

--ProductList.tsx--
Componente que muestra la lista de productos.
Función: Iterar sobre una lista de productos y renderizar un ProductCard para cada uno.
Propiedades: products, filters (filtros aplicados).
Funcionalidad: Al mostrar los productos, permite filtrar por nombre, estado de stock (bajo, normal, alto), y categoría.

--ProductCard.tsx--
Componente que muestra los detalles de un producto individual en un formato de tarjeta.
Función: Visualizar el nombre, descripción, cantidad disponible, precio y proveedor de un producto.
Propiedades: product (objeto con detalles del producto).
Funcionalidad: Botones para editar o eliminar producto.

--ProductForm.tsx--
Componente de formulario para agregar y editar productos.
Función: Permitir la creación o edición de un producto.
Propiedades: product (para editar), onSubmit (función que se ejecuta al enviar el formulario).
Funcionalidad: Los campos del formulario incluyen nombre, descripción, categoría, cantidad, precio, proveedor, y fecha de ingreso.

--CategoryList.tsx--
Componente que muestra la lista de categorías disponibles.
Función: Visualizar todas las categorías.
Propiedades: categories (lista de categorías).
Funcionalidad: Opción para agregar, editar y eliminar categorías.

--CategoryForm.tsx--
Componente de formulario para agregar y editar categorías.
Función: Permitir la creación o edición de una categoría.
Propiedades: category (para editar), onSubmit (función que se ejecuta al enviar el formulario).
Funcionalidad: Un solo campo de entrada para el nombre de la categoría.

--Sidebar.tsx--
Barra lateral de navegación que contiene filtros y accesos rápidos.
Función: Permite navegar entre las vistas de productos, categorías y gestión del inventario.
Propiedades: activeView (la vista activa).
Funcionalidad: Muestra enlaces de navegación, y opciones de filtros como categoría, estado de stock, etc.

--Modal.tsx--
Componente reutilizable para mostrar modales de confirmación o edición.
Función: Permite mostrar una ventana emergente para confirmaciones (por ejemplo, eliminar un producto).
Propiedades: isOpen (estado del modal), onClose (función para cerrar el modal).
Funcionalidad: Al pulsar el botón de eliminar o editar en productos o categorías, el modal se abre para confirmar la acción.

--Notification.tsx--
Componente para mostrar notificaciones al usuario.
Función: Mostrar notificaciones sobre cambios en los productos, alertas de stock bajo, etc.
Propiedades: message, type (success, error).
Funcionalidad: Notificación visible al usuario que desaparece después de un tiempo o puede ser cerrada manualmente.

--FilterPanel.tsx--
Panel de filtros para aplicar a la vista de productos o categorías.
Función: Permitir al usuario filtrar los productos por estado de stock, nombre y categoría.
Propiedades: filters (filtros aplicados), onFilterChange (función para actualizar los filtros).
Funcionalidad: Permite aplicar y quitar filtros de productos.

______________________________________________________________________
ENRUTADO Y VISTAS

Vista principal de inventario (inventory/page.tsx):
Esta vista mostrará todos los productos en forma de lista. Los filtros aplicados desde Sidebar o FilterPanel afectarán esta vista. Los botones de acción (Agregar, Editar, Eliminar) estarán presentes en cada producto.

Vista de detalle de producto (inventory/product/[id]/page.tsx):
Muestra los detalles completos de un producto con su historial de movimientos de stock, imágenes y comentarios.

Vista de gestión de categorías (inventory/category/page.tsx):
Muestra una lista de todas las categorías, y permite agregar, editar o eliminar categorías.

FUNCIONALIDAD DEL ENRUTADO

Productos
/inventory → Vista principal de productos.
/inventory/product/[id] → Detalle de producto individual.

Categorías
/inventory/category → Gestión de categorías.

Dashboard (administración)
/dashboard → Página de administración para gestión avanzada.

