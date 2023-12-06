import React, {Children} from "react";


/**
 * Fonction permettant de trouver un noeud enfant correspondant à un type donné
 */
export const findSlotOfType = (children: React.ReactNode, slotType: JSX.Element | React.ElementType ) => {
    return Children.toArray(children).find((child: any) => {
        return child.type === slotType;
    });
}