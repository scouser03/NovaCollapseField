# A collapse field for Laravel Nova


## Installation

First you must install this package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require scouser03/nova-collapse-field
```

## Usage


```php
namespace App\Nova;

use Spatie\TagsField\Tags;

class BlogPost extends Resource
{
    // ...
    
    public function fields(Request $request)
    {
        return [
            // ...
            
            (new Panel('Panel name', [
                NovaCollapseField::make('Panel name'),
                Text::make(__('Tag'), 'tag')
                    ->creationRules('required')
                    ->rules('required')
                    ->sortable(),
                
            ]))->help('icon'),

            // ...
        ];
    }
}
```


### Panel name and NovaCollapseField name must be same.

->help() method is required 


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
