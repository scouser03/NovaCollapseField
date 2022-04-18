<?php

namespace Scouser03\NovaCollapseField;

use Laravel\Nova\Fields\Field;

class NovaCollapseField extends Field
{

    public function __construct(string $name, ?string $attribute = null)
    {
        parent::__construct($name, $attribute);
        
        $this->hideFromIndex();
        
    }

    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'nova-collapse-field';
}
