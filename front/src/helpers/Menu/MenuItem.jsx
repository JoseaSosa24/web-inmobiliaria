export const MenuItem = ({ link, nombreItem, active, dropdown, children }) => {
    return (
        // se crea un elemento 'li' con clase 'nav-item' y si 'dropdown' es verdadero, se agrega la clase 'dropdown'
        <li className={`nav-item ${dropdown ? 'dropdown' : ''}`}>
            {/* // si 'dropdown' es verdadero, se renderizan dos elementos: 'a' y 'ul'
            // de lo contrario, solo se renderiza un elemento 'a' */}
            {dropdown ?
                (
                    <>
                        {/*  // se crea un elemento 'a' con clases 'nav-link dropdown-toggle' y si 'active' es verdadero, se agrega la clase 'active' */}
                        <a className={`nav-link dropdown-toggle ${active ? 'active' : ''}`} href={link} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* // se muestra el nombre del item en el elemento 'a' */}
                            {nombreItem}
                        </a>
                        {/*// se crea un elemento 'ul' con clase 'dropdown-menu' y se muestran los elementos hijos dentro de él*/}
                        <ul className="dropdown-menu">{children}</ul>
                    </>
                ) :
                (
                    // se crea un elemento 'a' con clases 'nav-link' y si 'active' es verdadero, se agrega la clase 'active'
                    <a className={`nav-link ${active ? 'active' : ''}`} aria-current="page" href={link}>
                        {/* // se muestra el nombre del item en el elemento 'a' */}
                        {nombreItem}
                    </a>
                )}
        </li>
    );
};
