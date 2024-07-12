import { useRef } from "react";

export default function useCustomEffect(effect, deps){
    //First Render
    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);

    if(isFirstRender.current) {
        isFirstRender.current = false;
        effect();
        return;
    }

    //Subsequent Render and deps array changes
    const depsChanged = deps ? JSON.stringify(deps)!== JSON.stringify(prevDeps.current) : true;
    if(depsChanged) {
        prevDeps.current = deps || [];
        effect();
    }
}